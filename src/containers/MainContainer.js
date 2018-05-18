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
  // actions: bindActionCreators(actionCreators, dispatch) 
});

class MainContainer extends Component {
  componentDidMount() {
    // fetch('http://localhost:3000/entry/1/2018-04-01')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   this.props.actions.syncDB(data)
    // })
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
