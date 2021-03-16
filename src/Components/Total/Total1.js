import React from 'react';
import TextField from '@material-ui/core/TextField';

const Total1 = (props) => {
  return (
    <div>
    {props.children}
    <p> $Total </p>
      <TextField
      disabled id="standard-disabled2"
      color="secondary"
      label={props.news}
      defaultValue={props.news}

       />
    </div>
  )
}


export default Total1;
