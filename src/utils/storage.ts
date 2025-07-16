import { TermStats } from '../types';

const STORAGE_KEY = 'math-quiz-stats-v1';

export const loadStats = (): Record<string, TermStats> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Failed to load stats:', error);
    return {};
  }
};

export const saveStats = (stats: Record<string, TermStats>): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to save stats:', error);
  }
};

export const resetStats = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to reset stats:', error);
  }
};

export const exportMissedTermsCSV = (missedTerms: { term: string; shortDef: string; seen: number; correct: number }[]): void => {
  const headers = ['Term', 'Definition', 'Times Seen', 'Times Correct', 'Accuracy'];
  const rows = missedTerms.map(item => [
    item.term,
    item.shortDef.replace(/,/g, '，'), // Replace commas to avoid CSV issues
    item.seen.toString(),
    item.correct.toString(),
    item.seen > 0 ? `${Math.round((item.correct / item.seen) * 100)}%` : '0%'
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `missed-math-terms-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};