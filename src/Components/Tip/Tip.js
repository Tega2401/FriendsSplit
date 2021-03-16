import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Tip.css';


const Tip = (props) => {
  return (
    <div>
    {props.children}
      <form>
      <TextField
      id="outlined-basic2"
      label="Tip%"
      variant="outlined"
      maxLength='2'
      value={props.tip}
      type='number'
      onChange={props.handleChange}
      className='bills'
       />
      </form>
    </div>
  )
}

export default Tip;
