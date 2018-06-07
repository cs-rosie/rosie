import React, { Component } from 'react';

class CheckInForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.myFetch = this.myFetch.bind(this);
  }
  handleTyping = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  myFetch = () => {
    fetch('http://localhost:8080/intCheckIn', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({email: this.state.email}), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
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
          {/* <button type="button" onClick={() => this.myFetch()} >Look Up</button> */}
          <button type="button" onClick={() => this.props.checkIn(this.state.email)} >Look Up</button>

        </form>
      </div>
    );
  }
};

export default CheckInForm;

