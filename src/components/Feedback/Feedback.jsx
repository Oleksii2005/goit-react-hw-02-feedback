// import css from 'Feedback/Feedback.module.css';
const { Component } = 'react';

class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  render() {
    return (
      <div className="container">
        <div className="feedback">
          <h2>Please leave feedback</h2>
          <button type="button" className="btn">
            Good
          </button>
          <button type="button" className="btn">
            Neutral
          </button>
          <button type="button" className="btn">
            Bad
          </button>
        </div>
      </div>
    );
  }
}
export default App;
