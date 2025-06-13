import React, { useState, useEffect } from "react";
import { quizData, QuizQuestion } from "./quizdata";
import { X } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [quizState, setQuizState] = useState("start"); // 'start', 'questions', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [answers, setAnswers] = useState<Record<number, number | null>>({}); // Stores selected answers
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      // Reset quiz state when modal closes
      setQuizState("start");
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setAnswers({});
      setScore(0);
    }
  }, [isOpen]);

  const handleStartQuiz = () => {
    setQuizState("questions");
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswerIndex(index);
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: index }));
  };

  const handleNextQuestion = () => {
    if (selectedAnswerIndex !== null) {
      // Check if answer is correct and update score
      if (
        selectedAnswerIndex ===
        quizData[currentQuestionIndex].correctAnswerIndex
      ) {
        setScore((prev) => prev + 1);
      }
    }
    setSelectedAnswerIndex(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizState("results");
    }
  };

  const handleRetakeQuiz = () => {
    setQuizState("start");
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setAnswers({});
    setScore(0);
  };

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const correctAnswersCount = Object.keys(answers).filter(
    (qIndex) =>
      answers[Number(qIndex)] === quizData[Number(qIndex)].correctAnswerIndex
  ).length;
  const incorrectAnswersCount =
    Object.keys(answers).length - correctAnswersCount;
  const finalScorePercentage = (score / totalQuestions) * 100;

  return (
    <div
      className={`quiz-modal-overlay ${isOpen ? "open" : ""}`}
      style={{
        display: isOpen ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2rem",
        zIndex: 1000,
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div
        className="quiz-modal-content"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2rem",
          width: "90%",
          maxWidth: "800px",
          position: "relative",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          className="quiz-close-button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          <X size={24} />
        </button>

        {quizState === "start" && (
          <div className="quiz-start-screen">
            <h1>Chapter 1 Quiz</h1>
            <p>Quiz | {totalQuestions} Questions</p>
            <div className="quiz-actions">
              <button className="quickstart-btn" onClick={handleStartQuiz}>
                Start Quiz
              </button>
              <button className="quiz-skip-btn" onClick={onClose}>
                Skip Quiz
              </button>
            </div>
          </div>
        )}

        {quizState === "questions" && currentQuestion && (
          <div className="quiz-question-container">
            <div className="question-header">
              <span className="question-progress">
                Question {currentQuestionIndex + 1}/{totalQuestions}
              </span>
            </div>
            <div className="progress-bar-quiz">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <h2 className="question-text">{currentQuestion.question}</h2>
            <div className="options-list">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={
                    selectedAnswerIndex === index
                      ? "option-item selected"
                      : "option-item"
                  }
                >
                  <input
                    type="radio"
                    name="quiz-option"
                    checked={selectedAnswerIndex === index}
                    onChange={() => handleAnswerSelect(index)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="quiz-navigation-buttons">
              <button
                className="quickstart-btn"
                onClick={handleNextQuestion}
                disabled={selectedAnswerIndex === null}
              >
                {currentQuestionIndex === totalQuestions - 1
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </div>
        )}

        {quizState === "results" && (
          <div className="quiz-results-container">
            <h1>Congratulations, Alex!</h1>
            <p className="text-gray-600">
              You have completed the quiz. Here's a summary of your performance.
            </p>
            <div className="results-summary">
              <div className="result-card correct">
                <h3>Correct Answers</h3>
                <p>{correctAnswersCount}</p>
              </div>
              <div className="result-card incorrect">
                <h3>Incorrect Answers</h3>
                <p>{incorrectAnswersCount}</p>
              </div>
            </div>
            <div className="score-section">
              <h3>Score</h3>
              <div className="score-bar-wrapper">
                <div
                  className="score-bar-fill"
                  style={{ width: `${finalScorePercentage}%` }}
                ></div>
              </div>
              <p className="score-percentage">
                {finalScorePercentage.toFixed(0)}%
              </p>
            </div>
            <div className="quiz-results-actions">
              <button className="quiz-retake-btn" onClick={handleRetakeQuiz}>
                Retake
              </button>
              <button className="quickstart-btn" onClick={onClose}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
