import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.isOn ? <img src="../images/toggle_green.png" /> : <img src="../images/toggle_grey.png" />}
      </div>
    );
  }
}

export default ToggleSwitch;
