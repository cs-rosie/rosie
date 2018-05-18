import React from 'react';

const vendorComponent = props =>
  (
    <div id={props.vendor.name}>
      <img className="vendors" src={ props.vendor.logo } alt={ props.vendor.name } />
    </div>
  );


export default vendorComponent;