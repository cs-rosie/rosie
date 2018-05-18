import React, { Component } from 'react';

class CheckInForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleTyping = this.handleTyping.bind(this);
  }
  handleTyping = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    return (
      <div>
        <form id="CheckIn">
          <label>First name:</label> 
          <input type="text" id="firstName" name="firstName" />
          <br />
          <label>
            Last name:
          </label>
          <input type="text" id="lastName" name="lastName" />
          <br />
          <label>
            Email:
          </label>
          <input type="email" id="email" name="email" onChange={this.handleTyping('email')} />
          <br />
          <button type="button" onClick={() => this.props.checkIn(this.state.email)} >Look Up</button>
        </form>
      </div>
    );
  }
};

export default CheckInForm;

