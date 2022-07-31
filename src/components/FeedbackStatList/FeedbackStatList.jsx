import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackStatList = ({ good, neutral, bad }) => {
  return (
    <ul className="feedbackStatList">
      <li className="feedbackStatItem">
        <p>
          Good: <span className="goodValue">{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span className="neutralValue">{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span className="badValue">{bad}</span>
        </p>
      </li>
    </ul>
  );
};

FeedbackStatList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
