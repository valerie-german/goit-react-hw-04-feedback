import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul className={css.list}>
      <li>
        <p>
          Good: <span className={css.span}>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span className={css.span}>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span className={css.span}>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span className={css.span}>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback: <span className={css.span}>{percent || 0}%</span>
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
