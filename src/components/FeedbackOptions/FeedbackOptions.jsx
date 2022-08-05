import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onHandleIncrement }) => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              name={option}
              onClick={() => {
                onHandleIncrement(option);
              }}
              className={css.btn}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onHandleIncrement: PropTypes.func.isRequired,
};
