import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onHandleIncrement }) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          type="button"
          name="good"
          onClick={onHandleIncrement}
          className={css.btn}
        >
          good
        </button>
      </li>
      <li>
        <button
          type="button"
          name="neutral"
          onClick={onHandleIncrement}
          className={css.btn}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          name="bad"
          onClick={onHandleIncrement}
          className={css.btn}
        >
          bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onHandleIncrement: PropTypes.func.isRequired,
};
