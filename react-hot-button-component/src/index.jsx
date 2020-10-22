import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countClick: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // make a variable called countClick set equal to this.state.countClick (find a way to copy it)
    // ---make destructure it <...this.state.countclick>
    this.setState({ countClick: this.state.countClick + 1 });
  }

  render() {
    return (
      <div>{this.state.countClick}</div>,
      <button onClick={this.handleClick}>
        {this.state.isClicked ? "I'M CLICKED" : 'Clicky Clicky'}
      </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
