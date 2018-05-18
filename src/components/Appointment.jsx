import React from 'react';

const Appointment = props => {
  const checkIn = (appointment) => {
    fetch('http://localhost:8000/intCheckIn', {
      method: "POST",
      body: {
        email: appointment.email
      },
      mode: 'no-cors',
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      props.checkIn(appointment);
    })
  }
  return (
    <div className="Appointment" onClick={() => checkIn(props.appointment)} >
      <div className="type">{ props.appointment.type }</div>
      <div className="title">{ props.appointment.summary }</div>
      <div className="email">{ props.appointment.email }</div>
    </div>
  );

}

export default Appointment;
