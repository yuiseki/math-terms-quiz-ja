export interface MathTerm {
  id: string;
  term: string;
  aliases?: string[];
  tags: TermTag[];
  shortDef: string;
  longDef?: string;
  difficultyBase?: number;
}

export type TermTag = '線形代数' | '解析' | '代数学' | '群論' | 'フーリエ解析' | 'トポロジー' | '確率統計' | 'その他';

export interface TermStats {
  id: string;
  seen: number;
  correct: number;
  lastSeen?: string;
  streak?: number;
  starred?: boolean;
}

export interface QuizQuestion {
  term: MathTerm;
  options: string[];
  correctIndex: number;
}

export interface QuizSession {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  startTime: number;
  mode: QuizMode;
  selectedTags?: TermTag[];
}

export type QuizMode = 'random' | 'category' | 'struggling';

export interface QuizResult {
  term: MathTerm;
  userAnswer: number | null;
  correctAnswer: number;
  isCorrect: boolean;
}