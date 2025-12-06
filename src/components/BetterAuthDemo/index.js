import React, { useState } from 'react';

const BetterAuthDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Placeholder quiz data
  const quizData = [
    {
      question: "What does ROS stand for?",
      options: ["Robot Operating System", "Robotic Operating Software", "Remote Operating System", "Robotic Open Software"],
      correctAnswer: 0
    },
    {
      question: "Which sensor is commonly used for depth perception in robotics?",
      options: ["IMU", "LiDAR", "GPS", "Compass"],
      correctAnswer: 1
    }
  ];

  const handleLogin = () => {
    // Simulate login
    setIsLoggedIn(true);
    setUser({ name: "Demo User", email: "demo@example.com" });
    console.log("Login functionality would be implemented here using Better Auth.");
  };

  const handleSignup = () => {
    // Simulate signup
    setIsLoggedIn(true);
    setUser({ name: "New Demo User", email: "newdemo@example.com" });
    console.log("Signup functionality would be implemented here using Better Auth.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    console.log("Logout functionality would be implemented here using Better Auth.");
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (selectedOptionIndex) => {
    if (selectedOptionIndex === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      setQuizStarted(false);
      alert(`Quiz finished! Your score: ${score + (selectedOptionIndex === quizData[currentQuestion].correctAnswer ? 1 : 0)}/${quizData.length}`);
    }
  };

  return (
    <div>
      <h3>Better Auth Demo</h3>
      {!isLoggedIn ? (
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={handleLogout}>Logout</button>
          {!quizStarted ? (
            <button onClick={startQuiz}>Start Quiz</button>
          ) : (
            <div className="quiz-area">
              <h4>Question {currentQuestion + 1} of {quizData.length}:</h4>
              <p>{quizData[currentQuestion].question}</p>
              <div>
                {quizData[currentQuestion].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(index)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <p><em>Note: This is a simulation. Actual Better Auth integration requires npm installation and backend setup.</em></p>
    </div>
  );
};

export default BetterAuthDemo;
