import React from 'react';

const eventComponent = props =>
  <div>
    <button>{JSON.stringify(props.eventName)}</button>

  </div>


export default eventComponent;