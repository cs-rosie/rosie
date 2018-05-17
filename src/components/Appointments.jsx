import React from 'react';

const Appointments = (props) => {
  const appointments = [];
  for (let i = 0; i < props.appointments.length; i += 1) {
    appointments.push(`<Appointment appointment=${props.appointments[i]} />`);
  }
  return (
    <div id="Appointments">
      { appointments }
    </div>
  );
}

export default Appointments;
