import React from 'react';

const eventComponent = props =>
  <div className="event">
    <div className="name"> { props.event.summary }</div>
    <div className="timestamp">6:30pm - 9:00pm</div>
  </div>


export default eventComponent;
