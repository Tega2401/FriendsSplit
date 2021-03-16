import React from 'react';
import TextField from '@material-ui/core/TextField';

import './People.css';

const People = (props) => {
  return (
    <div>
    {props.children}
      <form>
      <TextField
      id="outlined-basic3"
      label="Number of Friends"
      variant="outlined"
      maxLength='2'
      value={props.people}
      type='number'
      onChange={props.handleChange}
      className='bills'
       />
      </form>
    </div>
  )
}

export default People;
//<ColoredLine color="grey" />
