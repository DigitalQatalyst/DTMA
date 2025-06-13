export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of the following is NOT a typical step in the procurement process?",
    options: [
      "Identifying needs",
      "Supplier selection",
      "Product marketing",
      "Contract negotiation",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    question: "What is the primary goal of digital transformation in procurement?",
    options: [
      "Increase paper usage",
      "Reduce efficiency",
      "Enhance automation and data analysis",
      "Limit supplier relationships",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    question: "Which of these is a benefit of using e-procurement platforms?",
    options: [
      "Decreased transparency",
      "Higher administrative costs",
      "Improved compliance and cost savings",
      "Slower transaction times",
    ],
    correctAnswerIndex: 2,
  },
]; 