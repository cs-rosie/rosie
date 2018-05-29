import React from 'react';
import PropTypes from 'prop-types';

const Appointment = (props) => {
  const { type, summary, email } = props.appointment;
  const checkIn = (appointment) => {
    fetch('http://localhost:8000/intCheckIn', {
      method: 'POST',
      body: {
        email
      },
      mode: 'no-cors',
    })
      .then(res => res.json())
      .then(() => { props.checkIn(appointment); });
  };
  return (
    <div
      className="Appointment"
      onClick={() => checkIn(props.appointment)}
      onKeyPress={checkIn(props.appointment)}
      role="button"
      tabIndex="0"
    >
      <div className="type">{ type }</div>
      <div className="title">{ summary }</div>
      <div className="email">{ email }</div>
    </div>
  );
};
export default Appointment;

Appointment.propTypes = {
  appointment: PropTypes.shape({
    type: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  checkIn: PropTypes.func.isRequired
};
