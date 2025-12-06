import React, { useState } from 'react';
import styles from './RagChatbot.module.css'; // Import CSS module for styling

const RagChatbot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }

    setIsLoading(true);
    setResponse(''); // Clear previous response

    try {
      // Placeholder API call to the RAG backend
      // Replace 'http://localhost:8000/query' with the actual backend endpoint once it's implemented
      const backendUrl = process.env.RAG_BACKEND_URL || 'http://localhost:8000/query';
      const requestBody = { query: question };

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.answer || 'No answer received from the backend.');
    } catch (error) {
      console.error('Error fetching RAG response:', error);
      setResponse(`Error: ${error.message || 'An error occurred while fetching the response.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line in textarea
      handleAsk();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <h3>Textbook Q&A</h3>
      <div className={styles.inputArea}>
        <textarea
          className={styles.questionInput}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about the textbook content..."
          rows="3"
        />
        <button
          className={styles.askButton}
          onClick={handleAsk}
          disabled={isLoading}
        >
          {isLoading ? 'Asking...' : 'Ask'}
        </button>
      </div>
      {response && (
        <div className={styles.responseArea}>
          <h4>Answer:</h4>
          <div className={styles.responseText}>{response}</div>
        </div>
      )}
    </div>
  );
};

export default RagChatbot;
