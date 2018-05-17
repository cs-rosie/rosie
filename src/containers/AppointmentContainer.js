import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import CheckInForm from '../components/CheckInForm.jsx';
import Appointments from '../components/Appointments.jsx';

const mapStateToProps = store => ({
  appointments: store.data.appointments,
  currentAppointments: store.data.currentAppointments,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class AppointmentContainer extends Component{
  constructor(props) {
    super(props);
    this.findUserAppointment = this.findUserAppointment.bind(this);
  }
  findUserAppointment = user => {
    actions.checkAppt(user);
  }

  render() {
    return (
      <div className="MainContainer">
        <CheckInForm checkIn={this.findUserAppointment} />
        <Appointments appointments={this.props.currentAppointments} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer);
