import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment.jsx';

const Appointments = (props) => {
  const appointments = [];
  for (let i = 0; i < props.appointments.length; i += 1) {
    appointments.push(<Appointment appointment={props.appointments[i]} key={i} checkIn={props.checkIn} checkOut={props.checkOut} />);
  }
  return (
    <div id="Appointments">
      { appointments }
    </div>
  );
};

export default Appointments;

Appointments.propTypes = {
  appointments: PropTypes.arrayOf({
    type: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  checkIn: PropTypes.func.isRequired,
  checkOut: PropTypes.func.isRequired
};
