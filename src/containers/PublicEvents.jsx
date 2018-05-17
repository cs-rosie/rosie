import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import Event from '../components/event.jsx';


const mapStateToProps = (store) => {
  return store.data;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
};


class PublicEvents extends Component {

  componentDidMount() {
    console.log('EVENTPROPS', this.props.events);
  }

  render() {
    let eventList = [];
    for(let i = 0; i < this.props.events.length; i++){
      eventList.push(<Event eventName={this.props.events[i]}/>)
    }
    return (
      <div>
        <h3>Public Events Container</h3>
        {eventList}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicEvents);