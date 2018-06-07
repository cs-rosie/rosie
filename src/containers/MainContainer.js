import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import PublicEvent from './PublicEvents.jsx';
import Vendors from './vendors.jsx'
import AppointmentContainer from './AppointmentContainer';

const mapStateToProps = store => ({
  // events: store.data.events,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class MainContainer extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/getAllEvents')
    .then(res => res.json())
    .then(data => {
      console.log('getAllevents', data);
      this.props.actions.syncDB(data)
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div id="Events">
        <PublicEvent />
        <Vendors />
        <AppointmentContainer />
      </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
