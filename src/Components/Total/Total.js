import React from 'react';
import TextField from '@material-ui/core/TextField';

const Total = (props) => {
  return (
    <div>
    {props.children}
    <p> $Total per person</p>
      <TextField
      disabled id="standard-disabled1"
      label={props.news}
      defaultValue={props.news}
       />
    </div>
  )
}


export default Total;
