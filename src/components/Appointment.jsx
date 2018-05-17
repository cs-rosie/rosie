import React from 'react';

const Appointment = props =>
  (
    <div className="Appointment">
      <div className="type">{ props.appointment.type }</div>
      <div className="title">{ props.appointment.title }</div>
      <div className="email">{ props.appointment.email }</div>
    </div>
  );

export default Appointment;
