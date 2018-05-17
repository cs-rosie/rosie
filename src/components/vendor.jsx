import React from 'react';

const vendorComponent = props =>
  <div id={ props.vendorName } onClick={()=>console.log(props.vendorName)}>
   {props.vendorName} 
  </div>


export default vendorComponent;