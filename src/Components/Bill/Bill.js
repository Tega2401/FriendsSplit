import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Bill.css';
const Bill = (props) => {

  return (
    <div className='bill'>
    {props.children}
      <form>
      <TextField
      id="outlined-basic1"
      label="$Bill"
      variant="outlined"
      maxLength='2'
      value={props.bill}
      type='number'
      onChange={props.handleChange}
      className='bills'
       />
      </form>
    </div>
  )
}


export default Bill;
//<Bill bill={this.state.bill} handleChange={this.handleChange}> Enter bill total</Bill>
