import React from 'react';

const vendorComponent = props => {
  const myFetch = () => {
    fetch('http://localhost:8080/otherCheckIn', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({message: `Delivery person at the front desk.  Please come!`}), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  return (
    <div id={props.vendor.name}>
      <img className="vendors" src={ props.vendor.logo } alt={ props.vendor.name } onClick={() => myFetch()} />
    </div>
  );

}


export default vendorComponent;