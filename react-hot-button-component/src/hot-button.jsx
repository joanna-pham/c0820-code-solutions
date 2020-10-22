import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countClick: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ countClick: this.state.countClick + 1 });
  }

  render() {
    const counter = this.state.countClick;

    if (counter <= 2) {
      return (
        <button onClick={this.handleClick} className="buttonDefault">
          Clicky Clicky
        </button>
      );
    }
    if (counter <= 5) {
      return (
        <button onClick={this.handleClick} className="buttonThree">
          Clicky Clicky
        </button>
      );
    }
    if (counter <= 8) {
      return (
        <button onClick={this.handleClick} className="buttonSix">
          Clicky Clicky
        </button>
      );
    }
    if (counter <= 11) {
      return (
        <button onClick={this.handleClick} className="buttonNine">
          Clicky Clicky
        </button>
      );
    }
    if (counter <= 14) {
      return (
        <button onClick={this.handleClick} className="buttonTwelve">
          Clicky Clicky
        </button>
      );
    }
    if (counter >= 15) {
      return (
        <button onClick={this.handleClick} className="buttonFifteen">
          Clicky Clicky
        </button>
      );
    }

    return (
      <div>
        <button onClick={this.handleClick} className="buttonDefault">
          Clicky Clicky
        </button>
      </div>
    );
  }
}

export default CustomButton;
