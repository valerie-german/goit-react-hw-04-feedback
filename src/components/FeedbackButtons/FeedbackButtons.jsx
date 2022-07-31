import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackButtons = ({ onHandleIncrement }) => {
  return (
    <ul className="feedbackButtons">
      <li>
        <button type="button" name="good" onClick={onHandleIncrement}>
          good
        </button>
      </li>
      <li>
        <button type="button" name="neutral" onClick={onHandleIncrement}>
          neutral
        </button>
      </li>
      <li>
        <button type="button" name="bad" onClick={onHandleIncrement}>
          bad
        </button>
      </li>
    </ul>
  );
};

FeedbackButtons.propTypes = {
  onHandleIncrement: PropTypes.func.isRequired,
};
