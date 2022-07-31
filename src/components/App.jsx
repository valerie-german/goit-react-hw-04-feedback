import React from 'react';
import { FeedbackCounter } from './FeedbackCounter/FeedbackCounter';

export const App = () => {
  return (
    <div>
      <FeedbackCounter
        askTitle="Please leave your feedback"
        statTitle="Statistic"
      />
    </div>
  );
};
