import React from 'react';
import TextField from '@material-ui/core/TextField';

const Total2 = (props) => {
  return (
    <div>
    {props.children}
    <p> $Tip </p>
      <TextField
      disabled id="standard-disabled3"
      label={props.news}
      defaultValue={props.news}
       />
    </div>
  )
}


export default Total2;
