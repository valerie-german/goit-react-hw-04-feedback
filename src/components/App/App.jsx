import { useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App () {

  const[good, setGood]=useState(0);
  const[neutral, setNeutral]=useState(0);
  const[bad, setBad]=useState(0);



  const handleIncrement = option => {
    switch (option) {
      case "good":
        setGood(prevState =>(prevState +1));
        break;
    
      case "neutral":
        setNeutral(prevState =>(prevState +1));
        break;
    
      case "bad":
        setBad(prevState =>(prevState +1));
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
