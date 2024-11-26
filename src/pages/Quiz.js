import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (answer) => {
    const correctAnswer = questions[currentQuestion].answer;
    setSelectedOption(answer);
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      }, 2000);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-600 overflow-y-auto">
      <h1 className="text-5xl font-bold text-blue-400 mb-6">Trắc nghiệm hiểu biết về khủng long</h1>
      {showScore ? (
        <div className="text-center bg-slate-400 rounded-lg shadow-lg w-full md:w-full">
          <h2 className="text-4xl font-bold mb-4 text-green-600">
            Điểm của bạn: {score} / {questions.length}
          </h2>
          <button 
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
              setSelectedOption(null);
            }}
            className="mt-4 m-3 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-yellow-700 transition"
          >
            Chơi lại
          </button>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Quay lại trang chủ
          </button>
        </div>
      ) : (
        <div className="p-10 bg-gray-400 rounded-lg shadow-lg w-full md:w-full">
          <h3 className="text-lg mb-2 text-gray-600">
            Câu hỏi {currentQuestion + 1} / {questions.length}
          </h3>
          <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div className="flex flex-col space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`py-2 px-4 rounded-lg transition duration-300 ease-in-out ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? 'bg-green-500 text-white transform scale-105'
                      : 'bg-red-500 text-white transform scale-105'
                    : 'bg-gray-300 hover:bg-blue-600'
                }`}
              >
                {`${index + 1}. ${option}`}
              </button>
            ))}
          </div>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Quay lại trang chủ
          </button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
