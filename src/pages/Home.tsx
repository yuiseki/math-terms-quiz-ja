import React from 'react';
import { QuizMode, TermTag } from '../types';
import { getAllTags } from '../data/mathTerms';
import { Brain, BookOpen, Target, BarChart3 } from 'lucide-react';

interface HomeProps {
  onStartQuiz: (mode: QuizMode, tags?: TermTag[]) => void;
  strugglingTermsCount: number;
}

export const Home: React.FC<HomeProps> = ({ onStartQuiz, strugglingTermsCount }) => {
  const [selectedTags, setSelectedTags] = React.useState<TermTag[]>([]);
  const [showTagSelection, setShowTagSelection] = React.useState(false);

  const allTags = getAllTags();

  const handleTagToggle = (tag: TermTag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleCategoryQuiz = () => {
    if (selectedTags.length === 0) {
      setShowTagSelection(true);
    } else {
      onStartQuiz('category', selectedTags);
    }
  };

  const QuizModeCard: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    badge?: string;
  }> = ({ title, description, icon, onClick, disabled, badge }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
        disabled
          ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
          : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 active:scale-95'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg mr-4 ${disabled ? 'bg-gray-200' : 'bg-indigo-100'}`}>
            {icon}
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-1 ${disabled ? 'text-gray-400' : 'text-gray-800'}`}>
              {title}
            </h3>
            <p className={`${disabled ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
        </div>
        {badge && (
          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">
              数学用語クイズ
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            定義から用語を当てる4択クイズで効率的に数学用語を学習しましょう
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-8">
          <QuizModeCard
            title="ランダム練習"
            description="全用語からランダムに出題"
            icon={<Brain className="w-6 h-6 text-indigo-600" />}
            onClick={() => onStartQuiz('random')}
          />
          
          <QuizModeCard
            title="分野別練習"
            description="特定の分野に絞って出題"
            icon={<BookOpen className="w-6 h-6 text-indigo-600" />}
            onClick={handleCategoryQuiz}
          />
          
          <QuizModeCard
            title="苦手再挑戦"
            description="正答率の低い用語を優先出題"
            icon={<Target className="w-6 h-6 text-indigo-600" />}
            onClick={() => onStartQuiz('struggling')}
            disabled={strugglingTermsCount === 0}
            badge={strugglingTermsCount > 0 ? `${strugglingTermsCount}語` : ''}
          />
        </div>

        {showTagSelection && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              学習する分野を選択してください
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowTagSelection(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  if (selectedTags.length > 0) {
                    onStartQuiz('category', selectedTags);
                  }
                }}
                disabled={selectedTags.length === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedTags.length > 0
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                クイズを開始
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            学習統計
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-indigo-600">150+</div>
              <div className="text-sm text-indigo-800">収録用語数</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-600">7</div>
              <div className="text-sm text-emerald-800">分野カテゴリ</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-600">{strugglingTermsCount}</div>
              <div className="text-sm text-amber-800">苦手用語数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};