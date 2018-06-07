import React from 'react';
import PublicEvent from './PublicEvents.jsx';
import Vendors from './vendors.jsx'
import AppointmentContainer from './AppointmentContainer';

const MainContainer = () =>
  (
    <div id="Events">
      <PublicEvent />
      <Vendors />
      <AppointmentContainer />
    </div>
  );

export default MainContainer;
