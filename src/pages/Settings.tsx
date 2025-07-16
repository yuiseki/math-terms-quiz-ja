import React from 'react';
import { resetStats } from '../utils/storage';
import { Settings as SettingsIcon, Trash2, ArrowLeft, Info } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
  onStatsReset: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack, onStatsReset }) => {
  const [showResetConfirm, setShowResetConfirm] = React.useState(false);

  const handleResetStats = () => {
    resetStats();
    onStatsReset();
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              戻る
            </button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <SettingsIcon className="w-7 h-7 mr-3" />
              設定
            </h1>
            <div className="w-16" />
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              データ管理
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <h3 className="font-medium text-red-800">学習履歴をリセット</h3>
                  <p className="text-sm text-red-600">
                    全ての学習統計と正答率データを削除します
                  </p>
                </div>
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  リセット
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              アプリについて
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">機能</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>150以上の数学用語を収録</li>
                  <li>定義から用語を当てる4択クイズ</li>
                  <li>分野別学習（線形代数、解析、群論など）</li>
                  <li>苦手用語の優先出題</li>
                  <li>学習統計の追跡</li>
                  <li>間違えた用語のCSVエクスポート</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">キーボードショートカット</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>1-4キー: 選択肢を選択</li>
                  <li>Enterキー / Spaceキー: 次の問題へ</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">データ保存</h3>
                <p>全てのデータはブラウザのローカルストレージに保存されます。外部サーバーにデータが送信されることはありません。</p>
              </div>
            </div>
          </div>
        </div>

        {showResetConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                学習履歴をリセットしますか？
              </h3>
              <p className="text-gray-600 mb-6">
                この操作は取り消せません。全ての学習統計と正答率データが削除されます。
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleResetStats}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  リセット
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};