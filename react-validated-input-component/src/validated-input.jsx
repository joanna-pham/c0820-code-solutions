import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textValue: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value: value,
      textValue: true
    });
  }

  render() {

    let message;
    let icon;

    if (this.state.textValue === false && this.state.value.length <= 0) {
      message = <h3 className="error-message">A password is required.</h3>;
      icon = <i className="fas fa-times"></i>;
    } else if (this.state.value.length <= 7) {
      message = <h3 className="error-message">Your password is too short.</h3>;
      icon = <i className="fas fa-times"></i>;
    } else {
      icon = <i className="fas fa-check"></i>;
    }

    return (
      <div>
        <form>
          <label>
            <div>Password</div>
            <input onChange={this.handleChange} type="password" name="name" value={this.state.value}/>
            <div className="icon-image">
              {icon}
            </div>
          </label>
        </form>
        <div>
          {message}
        </div>
      </div>
    );
  }
}
