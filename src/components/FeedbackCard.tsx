import React from 'react';
import { QuizQuestion } from '../types';
import { Check, X, BookOpen } from 'lucide-react';

interface FeedbackCardProps {
  question: QuizQuestion;
  userAnswer: number | null;
  isCorrect: boolean;
  onNext: () => void;
  showDetailedExplanation: boolean;
  onToggleExplanation: () => void;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  question,
  userAnswer,
  isCorrect,
  onNext,
  showDetailedExplanation,
  onToggleExplanation
}) => {
  const userAnswerText = userAnswer !== null ? question.options[userAnswer] : '未回答';
  const correctAnswerText = question.options[question.correctIndex];

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onNext]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className={`rounded-full p-3 ${isCorrect ? 'bg-emerald-100' : 'bg-red-100'}`}>
            {isCorrect ? (
              <Check className="w-8 h-8 text-emerald-600" />
            ) : (
              <X className="w-8 h-8 text-red-600" />
            )}
          </div>
        </div>
        
        <h2 className={`text-xl font-bold text-center mb-4 ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
          {isCorrect ? '正解！' : '不正解'}
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">正解</h3>
            <p className="text-gray-700">{correctAnswerText}</p>
          </div>
          
          {!isCorrect && (
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">あなたの回答</h3>
              <p className="text-red-700">{userAnswerText}</p>
            </div>
          )}
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">定義</h3>
            <p className="text-indigo-700">{question.term.shortDef}</p>
          </div>
          
          {question.term.longDef && (
            <div className="border-t pt-4">
              <button
                onClick={onToggleExplanation}
                className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {showDetailedExplanation ? '詳細説明を閉じる' : '詳細説明を見る'}
              </button>
              
              {showDetailedExplanation && (
                <div className="mt-3 bg-indigo-50 rounded-lg p-4">
                  <p className="text-indigo-700 leading-relaxed">
                    {question.term.longDef}
                  </p>
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            {question.term.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={onNext}
          className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors active:scale-95"
        >
          次へ
        </button>
        
        <div className="mt-3 text-sm text-gray-500 text-center">
          EnterキーまたはSpaceキーで次に進む
        </div>
      </div>
    </div>
  );
};