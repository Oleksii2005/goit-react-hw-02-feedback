import { Component } from 'react';
import css from './Feedback/Feedback.module.css';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="feedback">
          <h2>Please leave feedback</h2>
          <div className="feedback_btns">
            <button
              type="button"
              className={`${css.btn} ${css.btn_good}`}
              onClick={this.goodBtnHandleClick}
            >
              Good
            </button>
            <button
              type="button"
              className={`${css.btn} ${css.btn_neutral}`}
              onClick={this.neutralBtnHandleClick}
            >
              Neutral
            </button>
            <button
              type="button"
              className={`${css.btn} ${css.btn_bad}`}
              onClick={this.badBtnHandleClick}
            >
              Bad
            </button>
          </div>
        </div>
        <div className="statistics">
          <div className="statistics_options">
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:</p>
            <p>Positive feedback:</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
