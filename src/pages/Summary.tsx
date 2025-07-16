import React from 'react';
import { QuizResult } from '../types';
import { useStats } from '../hooks/useStats';
import { exportMissedTermsCSV } from '../utils/storage';
import { CheckCircle, XCircle, Download, RotateCcw, Home } from 'lucide-react';

interface SummaryProps {
  results: QuizResult[];
  onRetry: () => void;
  onHome: () => void;
}

export const Summary: React.FC<SummaryProps> = ({ results, onRetry, onHome }) => {
  const { getTermStats } = useStats();
  
  const correctCount = results.filter(r => r.isCorrect).length;
  const accuracy = (correctCount / results.length) * 100;
  const missedTerms = results.filter(r => !r.isCorrect);

  const handleExportCSV = () => {
    const csvData = missedTerms.map(result => {
      const stats = getTermStats(result.term.id);
      return {
        term: result.term.term,
        shortDef: result.term.shortDef,
        seen: stats.seen,
        correct: stats.correct
      };
    });
    
    exportMissedTermsCSV(csvData);
  };

  const getAccuracyColor = () => {
    if (accuracy >= 80) return 'text-emerald-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAccuracyBgColor = () => {
    if (accuracy >= 80) return 'bg-emerald-50 border-emerald-200';
    if (accuracy >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            クイズ結果
          </h1>
          <p className="text-gray-600">お疲れ様でした！</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <div className={`inline-block p-6 rounded-full border-2 ${getAccuracyBgColor()}`}>
              <span className={`text-4xl font-bold ${getAccuracyColor()}`}>
                {Math.round(accuracy)}%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-xl text-gray-700">
                {correctCount} / {results.length} 問正解
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-emerald-600">{correctCount}</div>
              <div className="text-sm text-emerald-800">正解</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{results.length - correctCount}</div>
              <div className="text-sm text-red-800">不正解</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">{Math.round(accuracy)}%</div>
              <div className="text-sm text-indigo-800">正答率</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRetry}
              className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors active:scale-95"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              もう一度
            </button>
            <button
              onClick={onHome}
              className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors active:scale-95"
            >
              <Home className="w-5 h-5 mr-2" />
              ホームに戻る
            </button>
          </div>
        </div>

        {missedTerms.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                間違えた用語 ({missedTerms.length}語)
              </h2>
              <button
                onClick={handleExportCSV}
                className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                CSVダウンロード
              </button>
            </div>
            
            <div className="space-y-4">
              {missedTerms.map((result, index) => {
                const stats = getTermStats(result.term.id);
                const userAnswerText = result.userAnswer !== null 
                  ? `${result.userAnswer + 1}. ${result.term.options?.[result.userAnswer] || '不明'}`
                  : '未回答';
                
                return (
                  <div key={index} className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-red-800">
                        {result.term.term}
                      </h3>
                      <div className="text-sm text-red-600">
                        正答率: {stats.seen > 0 ? Math.round((stats.correct / stats.seen) * 100) : 0}%
                      </div>
                    </div>
                    <p className="text-red-700 mb-2">{result.term.shortDef}</p>
                    <div className="text-sm text-red-600">
                      あなたの回答: {userAnswerText}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {result.term.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};