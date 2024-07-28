import './App.css';
import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedbackStats');
    if (savedFeedback) {
      setFeedbackStats(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbackStats', JSON.stringify(feedbackStats));
  }, [feedbackStats]);

  const updateFeedback = feedbackType => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackStats({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedbackStats.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackStats}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
