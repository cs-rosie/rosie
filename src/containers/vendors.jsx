import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import Vendor from '../components/vendor.jsx';

const mapStateToProps = store => ({
  vendors: store.data.vendors,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(actionCreators, dispatch),
});


class Vendors extends Component {
  render() {
    let vendorsList = [];
    for(let i = 0; i < this.props.vendors.length; i += 1){
      vendorsList.push(<Vendor vendor={this.props.vendors[i]} key={i}/>)
    }
    return (
      <div id="vendorList">
        {vendorsList}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
