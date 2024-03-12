import React, { useState } from 'react';

export const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;

  return (
    <div className="App">
      <div>
        <h2>Please leave your feedback</h2>
        <div>
          <button onClick={() => handleFeedback('good')}>good</button>
          <button onClick={() => handleFeedback('neutral')}>neutral</button>
          <button onClick={() => handleFeedback('bad')}>bad</button>
        </div>
      </div>
      {totalFeedback > 0 ? (
        <div>
          <h2>Statistics</h2>
          <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
          </div>
        </div>
      ) : (
        <p>There is no feedback yet.</p>
      )}
    </div>
  );
};
