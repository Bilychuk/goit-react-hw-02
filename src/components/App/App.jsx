import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css';

function App() {
  const getInitialFeedbacks = () => {
    const savedFeedbacks = localStorage.getItem('feedbackCounter');
    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(getInitialFeedbacks);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positive = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedbacks = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    const feedbackString = JSON.stringify(feedback);
    localStorage.setItem('feedbackCounter', feedbackString);
  }, [feedback]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedbacks}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          value={feedback}
          total={totalFeedback}
          positiveFeedbacks={positive}
        />
      )}
    </div>
  );
}

export default App;
