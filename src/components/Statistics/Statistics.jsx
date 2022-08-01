import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
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
      <li>
        <p>
          Total: <span className="totalValue">{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:{' '}
          <span className="positiveFeedbackValue">{percent || 0}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
