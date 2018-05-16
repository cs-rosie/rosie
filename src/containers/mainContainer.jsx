import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';

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
        I am here!!!
      </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
