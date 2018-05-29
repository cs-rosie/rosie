import React from 'react';
import PropTypes from 'prop-types';

const vendorComponent = props =>
  (
    <div id={props.vendor.name}>
      <img className="vendors" src={props.vendor.logo} alt={props.vendor.name} />
    </div>
  );


export default vendorComponent;

vendorComponent.propTypes = {
  vendor: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired
};
