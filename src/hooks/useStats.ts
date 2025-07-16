import { useState, useEffect } from 'react';
import { TermStats } from '../types';
import { loadStats, saveStats } from '../utils/storage';

export const useStats = () => {
  const [stats, setStats] = useState<Record<string, TermStats>>({});

  useEffect(() => {
    setStats(loadStats());
  }, []);

  const updateStats = (termId: string, isCorrect: boolean) => {
    setStats(prevStats => {
      const currentStats = prevStats[termId] || {
        id: termId,
        seen: 0,
        correct: 0,
        lastSeen: new Date().toISOString(),
        streak: 0
      };

      const newStats = {
        ...currentStats,
        seen: currentStats.seen + 1,
        correct: currentStats.correct + (isCorrect ? 1 : 0),
        lastSeen: new Date().toISOString(),
        streak: isCorrect ? (currentStats.streak || 0) + 1 : 0
      };

      const updatedStats = {
        ...prevStats,
        [termId]: newStats
      };

      saveStats(updatedStats);
      return updatedStats;
    });
  };

  const getTermStats = (termId: string): TermStats => {
    return stats[termId] || {
      id: termId,
      seen: 0,
      correct: 0,
      streak: 0
    };
  };

  const getAccuracy = (termId: string): number => {
    const termStats = getTermStats(termId);
    return termStats.seen > 0 ? (termStats.correct / termStats.seen) * 100 : 0;
  };

  const getStrugglingTerms = (): string[] => {
    return Object.values(stats)
      .filter(stat => stat.seen >= 2 && (stat.correct / stat.seen) < 0.6)
      .sort((a, b) => {
        const aAccuracy = a.correct / a.seen;
        const bAccuracy = b.correct / b.seen;
        const aTime = new Date(a.lastSeen || 0).getTime();
        const bTime = new Date(b.lastSeen || 0).getTime();
        
        // Sort by accuracy (lower first) then by time (older first)
        if (aAccuracy !== bAccuracy) {
          return aAccuracy - bAccuracy;
        }
        return aTime - bTime;
      })
      .map(stat => stat.id);
  };

  const resetAllStats = () => {
    setStats({});
    saveStats({});
  };

  return {
    stats,
    updateStats,
    getTermStats,
    getAccuracy,
    getStrugglingTerms,
    resetAllStats
  };
};