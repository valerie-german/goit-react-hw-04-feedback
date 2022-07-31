import React from 'react';
import { Title } from '../Title/Title';

export class FeedbackCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleIncrement = event => {
    console.log('увеличить');
    console.log(event.target);
  };

  render() {
    return (
      <section>
        <Title text="askTitle" />
        <ul className="feedbackButtons">
          <li>
            <button type="button" name="good" onClick={this.handleIncrement}>
              good
            </button>
          </li>
          <li>
            <button type="button" name="neutral" onClick={this.handleIncrement}>
              neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad" onClick={this.handleIncrement}>
              bad
            </button>
          </li>
        </ul>
        <Title text="statTitle" />
        <ul className="feedbackStatList">
          <li className="feedbackStatItem">
            <p>
              Good:<span className="goodValue">0</span>
            </p>
          </li>
          <li>
            <p>
              Neutral:<span className="neutralValue">0</span>
            </p>
          </li>
          <li>
            <p>
              Bad:<span className="badValue">0</span>
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
