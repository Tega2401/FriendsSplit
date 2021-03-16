import React, {Component} from 'react';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import People from '../People/People';
import { Button } from '@material-ui/core';
//import Title from '../Title/Title';
import Total from '../Total/Total';
import Total1 from '../Total/Total1';
import Total2 from '../Total/Total2';
import './Layout.css';

class Layout extends Component {

  state = {

     bill: '',
     tip: '',
     people: '',
     totaltip: '',
     total: '',
     newtotal: '',
     ev: ''

  }

  handleChange = (event) => {
    this.setState({bill: event.target.value})
  }
  handleTip = (event) => {
    this.setState({tip: event.target.value})
  }
  handlePeople = (event) => {
    this.setState({people: event.target.value})
  }
  handleTotal = (event) => {
    this.setState({total: event.target.value})
  }

  evaluate= () => {
    this.setState(
      {totaltip:
        parseFloat(this.state.bill) *
        parseFloat(this.state.tip/100)})
  };

  evaluate1 = () => {
    this.setState(
      {total:
      parseFloat(this.state.totaltip) +
      parseFloat(this.state.bill)})
  }

  evaluate2 = () => {
    this.setState(
      {newtotal:
      parseFloat(this.state.total) /
      parseFloat(this.state.people)})
  }

  handleTotal = () => {
    const totaltip = (this.state.bill * (this.state.tip/100)).toFixed(2);
    const total =  (parseFloat(this.state.bill) + parseFloat(totaltip)).toFixed(2);
    const newtotal = (total / this.state.people).toFixed(2);

      this.setState({
          total: total,
          totaltip: totaltip,
          newtotal: newtotal
      })
  }

  clear = () => {

    this.setState({
      bill: '',
      tip: '',
      people: '',
      newtotal: '',
      totaltip: '',
      total: ''

    })
  }

  render() {
    return (
      <div className='Layout'>
        <div className='wave-container'>
        <h1> Friends Split</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff"  d="M0,64L30,90.7C60,117,120,171,180,170.7C240,171,300,117,360,101.3C420,85,480,107,540,128C600,149,660,171,720,170.7C780,171,840,149,900,138.7C960,128,1020,128,1080,133.3C1140,139,1200,149,1260,176C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        </div>
        <div className='root'>
        <div className='hi'>
          <Bill bill={this.state.bill} handleChange={this.handleChange} />
        </div>
        <div className='hii'>
          <Tip tip={this.state.tip} handleChange={this.handleTip}/>
        </div>
        <div className='hiii'>
          <People people={this.state.people} handleChange={this.handlePeople}/>
        </div>
        </div>
        <Button variant="outlined" color="primary" onClick={this.handleTotal}>Calculate</Button>
        <Button variant="outlined" color="primary" onClick={this.clear}>Clear</Button>
          <div className='total'>
          <Total news={this.state.newtotal}/>
          <Total1 news={this.state.total}/>
          <Total2 news={this.state.totaltip}/>
          </div>
      </div>
    )
  }
}


export default Layout;
