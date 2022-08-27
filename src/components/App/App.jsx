import { useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App () {
  // static defaultProps = {
  //   initialGood: 0,
  //   initialNeutral: 0,
  //   initialBad: 0,
  // };

  // static propTypes = {
  //   initialGood: PropTypes.number.isRequired,
  //   initialNeutral: PropTypes.number.isRequired,
  //   initialBad: PropTypes.number.isRequired,
  // };

  // state = {
  //   good: this.props.initialGood,
  //   neutral: this.props.initialNeutral,
  //   bad: this.props.initialBad,
  // };

  const[good, setGood]=useState(0);
  const[neutral, setNeutral]=useState(0);
  const[bad, setBad]=useState(0);



  const handleIncrement = option => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
    
      case "neutral":
        setNeutral(neutral + 1);
        break;
    
      case "bad":
        setBad(bad +1);
        break;
    
      default:
        return;
    }
    
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };


   const namesArray = ["good", "neutral", "bad"];
   

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={namesArray}
            onHandleIncrement={handleIncrement}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              percent={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }


  App.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};
