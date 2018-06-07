import React from 'react';
import PropTypes from 'prop-types';

const eventComponent = props =>
  (
    <div className="event">
      <div className="name"> { props.event.summary }</div>
      <div className="timestamp">6:30pm - 9:00pm</div>
    </div>
  );

export default eventComponent;

eventComponent.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired
};
