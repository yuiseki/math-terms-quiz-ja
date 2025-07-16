import React, { useState } from 'react';
import { QuizMode, TermTag, QuizResult } from '../types';
import { useQuiz } from '../hooks/useQuiz';
import { useStats } from '../hooks/useStats';
import { addCorrectTerm } from '../utils/storage';
import { QuizCard } from '../components/QuizCard';
import { FeedbackCard } from '../components/FeedbackCard';
import { Progress } from '../components/Progress';
import { ArrowLeft } from 'lucide-react';

interface QuizProps {
  mode: QuizMode;
  selectedTags?: TermTag[];
  strugglingTermIds: string[];
  onBack: () => void;
  onComplete: (results: QuizResult[]) => void;
}

export const Quiz: React.FC<QuizProps> = ({
  mode,
  selectedTags = [],
  strugglingTermIds,
  onBack,
  onComplete
}) => {
  const { updateStats } = useStats();
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);
  
  const {
    session,
    currentAnswer,
    showFeedback,
    isCompleted,
    submitAnswer,
    nextQuestion,
    getCurrentQuestion,
    getProgress,
    getResults
  } = useQuiz(mode, selectedTags, strugglingTermIds);

  const question = getCurrentQuestion();
  const progress = getProgress();

  const handleAnswerSelect = (answerIndex: number) => {
    if (!question || showFeedback) return;

    submitAnswer(answerIndex);

    // Update stats
    const isCorrect = answerIndex === question.correctIndex;
    updateStats(question.term.id, isCorrect);
    if (isCorrect) {
      addCorrectTerm(question.term.id);
    }
  };

  const handleNext = () => {
    if (isCompleted) {
      onComplete(getResults());
    } else {
      nextQuestion();
      setShowDetailedExplanation(false);
    }
  };

  const getModeTitle = () => {
    switch (mode) {
      case 'random':
        return 'ランダム練習';
      case 'category':
        return `分野別練習 (${selectedTags.join(', ')})`;
      case 'struggling':
        return '苦手再挑戦';
      default:
        return 'クイズ';
    }
  };

  if (!session || !question) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">問題を準備中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              戻る
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              {getModeTitle()}
            </h1>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
          <Progress current={progress.current} total={progress.total} />
        </header>

        <main>
          {showFeedback ? (
            <FeedbackCard
              question={question}
              userAnswer={currentAnswer}
              isCorrect={currentAnswer === question.correctIndex}
              onNext={handleNext}
              showDetailedExplanation={showDetailedExplanation}
              onToggleExplanation={() => setShowDetailedExplanation(!showDetailedExplanation)}
            />
          ) : (
            <QuizCard
              question={question}
              userAnswer={currentAnswer}
              showFeedback={showFeedback}
              onAnswerSelect={handleAnswerSelect}
            />
          )}
        </main>
      </div>
    </div>
  );
};