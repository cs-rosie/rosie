import React, { Component } from 'react';

class CheckInForm extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      user: {
        firstName: 'Ben',
        lastName: 'Gummelt',
        email: 'camaromelt@gmail.com'
      }
    }
  }
 
  handleChange = (field, value) => {
    let { firstName, lastName, email } = this.state.user;
    if (field === 'firstName') {
      firstName = value;
    } else if (field === 'lastName') {
      lastName = value;
    } else if (field === 'email') {
      email = value;
    };
    this.setState({
      user: {
        firstName,
        lastName,
        email
      }
    })
  }

  
  render() {
    const user = {};
    let lastName = document.querySelector('#lastName');
    let firstName = document.querySelector('#firstName');
    let email = document.querySelector('#email');
    
    
    return (
      <div>
        <form id="CheckIn">
          <label>First name:</label> 
          <input type="text" id="firstName" name="firstName" onChange={this.handleChange('firstName', firstName.value)} />
          <br />
          <label>
            Last name:
          </label>
          <input type="text" id="lastName" name="lastName" onChange={this.handleChange('lastName', lastName.value)} />
          <br />
          <input type="email" id="email" name="email" onChange={this.handleChange('email', email.value)} />
          <br />
          <button type="submit" onClick={props.checkIn(this.state.user)} >Look Up</button>
        </form>
      </div>
    );
  }
};

export default CheckInForm;

