import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import AppointmentContainer from './AppointmentContainer';

const mapStateToProps = store => ({
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
<<<<<<< HEAD:src/containers/mainContainer.jsx
        I am here in Main Container!!!
=======
        <AppointmentContainer />
>>>>>>> 00d8b290e4b4472e1841489c0aa49b9fd7ee8a81:src/containers/MainContainer.js
      </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
