import React from 'react';

const CheckInForm = props =>
  (
    <div>
      <form id="CheckIn" action="post">
        <label>First name:</label> 
        <input type="text" name="fName" />
        <br />
        <label>
          Last name:
        </label>
        <input type="text" name="lName" />
        <br />
        <button type="submit">Look Up</button>
      </form>
    </div>
  );

  export default CheckInForm;


