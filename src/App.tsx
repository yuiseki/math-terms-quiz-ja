import React, { useState } from 'react';
import { QuizMode, TermTag, QuizResult } from './types';
import { useStats } from './hooks/useStats';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Summary } from './pages/Summary';
import { Settings } from './pages/Settings';
import { Settings as SettingsIcon } from 'lucide-react';

type AppState = 'home' | 'quiz' | 'summary' | 'settings';

function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [quizMode, setQuizMode] = useState<QuizMode>('random');
  const [selectedTags, setSelectedTags] = useState<TermTag[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  
  const { getStrugglingTerms, resetAllStats } = useStats();
  const strugglingTermIds = getStrugglingTerms();

  const handleStartQuiz = (mode: QuizMode, tags: TermTag[] = []) => {
    setQuizMode(mode);
    setSelectedTags(tags);
    setAppState('quiz');
  };

  const handleQuizComplete = (results: QuizResult[]) => {
    setQuizResults(results);
    setAppState('summary');
  };

  const handleRetryQuiz = () => {
    setAppState('quiz');
  };

  const handleBackToHome = () => {
    setAppState('home');
    setQuizResults([]);
  };

  const handleSettingsReset = () => {
    resetAllStats();
  };

  const renderContent = () => {
    switch (appState) {
      case 'home':
        return (
          <Home
            onStartQuiz={handleStartQuiz}
            strugglingTermsCount={strugglingTermIds.length}
          />
        );
      
      case 'quiz':
        return (
          <Quiz
            mode={quizMode}
            selectedTags={selectedTags}
            strugglingTermIds={strugglingTermIds}
            onBack={handleBackToHome}
            onComplete={handleQuizComplete}
          />
        );
      
      case 'summary':
        return (
          <Summary
            results={quizResults}
            onRetry={handleRetryQuiz}
            onHome={handleBackToHome}
          />
        );
      
      case 'settings':
        return (
          <Settings
            onBack={handleBackToHome}
            onStatsReset={handleSettingsReset}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {appState === 'home' && (
        <button
          onClick={() => setAppState('settings')}
          className="fixed top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10"
          aria-label="設定"
        >
          <SettingsIcon className="w-6 h-6 text-gray-600" />
        </button>
      )}
      
      {renderContent()}
    </div>
  );
}

export default App;