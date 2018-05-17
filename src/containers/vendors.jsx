import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators'
import Vendor from '../components/vendor.jsx'

const mapStateToProps = (store) => {
   return store.data;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
};


class Vendors extends Component {

  componentDidMount() {
    console.log("VENDORPROPS", this.props.vendors)
  }

  

  render() {
    let vendorsList = [];
    for(let i = 0; i < this.props.vendors.length; i++){
      vendorsList.push(<Vendor vendorName={this.props.vendors[i]}/>)
    }
    return (
      <div>
        <h3>Vendors</h3>
        {vendorsList}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);