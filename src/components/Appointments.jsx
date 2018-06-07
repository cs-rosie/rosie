import React from 'react';
import Appointment from './Appointment.jsx';

const Appointments = (props) => {
  const appointments = [];
  for (let i = 0; i < props.appointments.length; i += 1) {
    appointments.push(<Appointment appointment={props.appointments[i]} key={i} checkIn={props.checkIn} checkOut={props.checkOut}/>);
  }
  return (
    <div id="Appointments">
      { appointments }
    </div>
  );
}

export default Appointments;
