import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title/Title';
import { FeedbackButtons } from '../FeedbackButtons/FeedbackButtons';
import { FeedbackStatList } from '../FeedbackStatList/FeedbackStatList';

export class FeedbackCounter extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  render() {
    return (
      <section>
        <Title text={this.props.askTitle} />
        <FeedbackButtons onHandleIncrement={this.handleIncrement} />

        <Title text={this.props.statTitle} />
        <FeedbackStatList
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </section>
    );
  }
}
