import { useState, useEffect } from 'react';
import { QuizQuestion, QuizSession, QuizMode, MathTerm, TermTag } from '../types';
import { mathTerms, getTermsByTags } from '../data/mathTerms';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const generateDistractors = (correctTerm: MathTerm, allTerms: MathTerm[]): string[] => {
  const sameTagTerms = allTerms.filter(term => 
    term.id !== correctTerm.id && 
    term.tags.some(tag => correctTerm.tags.includes(tag))
  );
  
  const otherTerms = allTerms.filter(term => 
    term.id !== correctTerm.id && 
    !term.tags.some(tag => correctTerm.tags.includes(tag))
  );

  const availableTerms = shuffleArray([...sameTagTerms, ...otherTerms]);
  const distractors = availableTerms.slice(0, 3).map(term => term.term);
  
  // Ensure we have exactly 3 distractors
  while (distractors.length < 3) {
    const randomTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
    if (randomTerm.id !== correctTerm.id && !distractors.includes(randomTerm.term)) {
      distractors.push(randomTerm.term);
    }
  }

  return distractors;
};

export const useQuiz = (
  mode: QuizMode,
  selectedTags: TermTag[] = [],
  strugglingTermIds: string[] = [],
  questionCount: number = 10
) => {
  const [session, setSession] = useState<QuizSession | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const generateQuestions = (): QuizQuestion[] => {
    let candidateTerms: MathTerm[] = [];

    switch (mode) {
      case 'random':
        candidateTerms = mathTerms;
        break;
      case 'category':
        candidateTerms = getTermsByTags(selectedTags);
        break;
      case 'struggling':
        candidateTerms = mathTerms.filter(term => strugglingTermIds.includes(term.id));
        break;
    }

    if (candidateTerms.length === 0) {
      candidateTerms = mathTerms;
    }

    const shuffledTerms = shuffleArray(candidateTerms);
    const selectedTerms = shuffledTerms.slice(0, Math.min(questionCount, shuffledTerms.length));

    return selectedTerms.map(term => {
      const distractors = generateDistractors(term, mathTerms);
      const options = shuffleArray([term.term, ...distractors]);
      const correctIndex = options.indexOf(term.term);

      return {
        term,
        options,
        correctIndex
      };
    });
  };

  const startQuiz = () => {
    const questions = generateQuestions();
    setSession({
      questions,
      currentIndex: 0,
      answers: new Array(questions.length).fill(null),
      startTime: Date.now(),
      mode,
      selectedTags: selectedTags.length > 0 ? selectedTags : undefined
    });
    setCurrentAnswer(null);
    setShowFeedback(false);
  };

  const submitAnswer = (answerIndex: number) => {
    if (!session || showFeedback) return;

    setCurrentAnswer(answerIndex);
    setShowFeedback(true);

    setSession(prev => {
      if (!prev) return null;
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentIndex] = answerIndex;
      return {
        ...prev,
        answers: newAnswers
      };
    });
  };

  const nextQuestion = () => {
    if (!session) return;

    if (session.currentIndex < session.questions.length - 1) {
      setSession(prev => ({
        ...prev!,
        currentIndex: prev!.currentIndex + 1
      }));
      setCurrentAnswer(null);
      setShowFeedback(false);
    }
  };

  const isCompleted = session && session.currentIndex === session.questions.length - 1 && showFeedback;

  const getCurrentQuestion = (): QuizQuestion | null => {
    return session ? session.questions[session.currentIndex] : null;
  };

  const getResults = () => {
    if (!session) return [];

    return session.questions.map((question, index) => ({
      term: question.term,
      userAnswer: session.answers[index],
      correctAnswer: question.correctIndex,
      isCorrect: session.answers[index] === question.correctIndex
    }));
  };

  const getProgress = () => {
    if (!session) return { current: 0, total: 0 };
    return {
      current: session.currentIndex + 1,
      total: session.questions.length
    };
  };

  useEffect(() => {
    if (mode && (mode !== 'category' || selectedTags.length > 0)) {
      startQuiz();
    }
  }, [mode, selectedTags.join(','), strugglingTermIds.join(',')]);

  return {
    session,
    currentAnswer,
    showFeedback,
    isCompleted,
    startQuiz,
    submitAnswer,
    nextQuestion,
    getCurrentQuestion,
    getResults,
    getProgress
  };
};