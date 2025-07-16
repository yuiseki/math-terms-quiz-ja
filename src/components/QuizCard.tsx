import React from 'react';
import { QuizQuestion } from '../types';
import { Check, X } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  userAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (index: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  userAnswer,
  showFeedback,
  onAnswerSelect
}) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (showFeedback) return;
    
    const key = event.key;
    if (key >= '1' && key <= '4') {
      const index = parseInt(key) - 1;
      if (index < question.options.length) {
        onAnswerSelect(index);
      }
    }
  };

  React.useEffect(() => {
    const handleGlobalKeyPress = (event: KeyboardEvent) => {
      if (showFeedback) return;
      
      const key = event.key;
      if (key >= '1' && key <= '4') {
        const index = parseInt(key) - 1;
        if (index < question.options.length) {
          onAnswerSelect(index);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyPress);
    return () => window.removeEventListener('keydown', handleGlobalKeyPress);
  }, [showFeedback, onAnswerSelect, question.options.length]);

  const getButtonClassName = (index: number) => {
    const baseClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium";
    
    if (!showFeedback) {
      return `${baseClass} border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 active:scale-95`;
    }

    const isCorrect = index === question.correctIndex;
    const isSelected = index === userAnswer;

    if (isCorrect) {
      return `${baseClass} border-emerald-500 bg-emerald-50 text-emerald-700`;
    } else if (isSelected) {
      return `${baseClass} border-red-500 bg-red-50 text-red-700`;
    } else {
      return `${baseClass} border-gray-200 bg-gray-50 text-gray-500`;
    }
  };

  const getButtonIcon = (index: number) => {
    if (!showFeedback) return null;
    
    const isCorrect = index === question.correctIndex;
    const isSelected = index === userAnswer;
    
    if (isCorrect) {
      return <Check className="w-5 h-5 ml-2 text-emerald-600" />;
    } else if (isSelected) {
      return <X className="w-5 h-5 ml-2 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          次の定義に当てはまる数学用語を選んでください：
        </h2>
        <div className="bg-indigo-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            {question.term.shortDef}
          </p>
        </div>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && onAnswerSelect(index)}
              className={getButtonClassName(index)}
              disabled={showFeedback}
              aria-label={`選択肢 ${index + 1}: ${option}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 mr-3">
                    {index + 1}.
                  </span>
                  {option}
                </span>
                {getButtonIcon(index)}
              </div>
            </button>
          ))}
        </div>
        
        {!showFeedback && (
          <div className="mt-4 text-sm text-gray-500 text-center">
            キーボードの1-4キーでも回答できます
          </div>
        )}
      </div>
    </div>
  );
};