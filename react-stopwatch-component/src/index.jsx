import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      className: ''
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  startTimer() {
    this.setState({
      isOn: !this.state.isOn,
      time: this.state.time + 1
    });
    this.counter = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000);

  }

  pauseTimer() {
    clearInterval(this.counter);
    this.setState({ isOn: false });
  }

  render() {

    return (
      <div>
        <div className="timer">
          <h1>{this.state.time}</h1>
        </div>
        <div className="icon">
          {!this.state.isOn
            ? <div onClick={this.startTimer}>
              <i className="fas fa-play fa-3x"></i>
            </div>
            : <div onClick={this.pauseTimer}>
              <i className="fas fa-pause fa-3x"></i>
            </div>}
        </div>
      </div>
    );

  }
}

ReactDOM.render(
  <Stopwatch/>,
  document.querySelector('#root')
);
