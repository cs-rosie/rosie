import React from 'react';

const Appointment = props => {

  const myFetch = (email) => {
    fetch('http://localhost:8080/intCheckIn', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({email}), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  return (
    <div className="Appointment" onClick={() => myFetch(props.appointment.email)} >
      <div className="type">{ props.appointment.type }</div>
      <div className="title">{ props.appointment.summary }</div>
      <div className="email">{ props.appointment.email }</div>
    </div>
  );

}

export default Appointment;
