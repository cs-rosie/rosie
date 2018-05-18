import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import Event from '../components/event.jsx';

const mapStateToProps = store => ({
  events: store.data.events
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class PublicEvents extends Component {
  render() {
    const eventList = [];
    for (let i = 0; i < this.props.events.length; i += 1) {
      eventList.push(<Event event={ this.props.events[i] } key={i} />)
    };

    return (
      <div id="publicEvents">
        <h3>Public Events Container</h3>
        { eventList }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicEvents);
