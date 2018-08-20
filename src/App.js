import React, { Component } from 'react';
import './App.css';
import InstrumentInput from './components/Instrument_Input';
import InstrumentList from './components/Instrument_List';
import ClearAllBtn from './components/ClearAllBtn';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      userInput: '',
      instruments: ['bass', 'drums', 'flute']
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
    this.handleClear=this.handleClear.bind(this)
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  handleKeyPress(e){
    if(e.which === 13){
      this.setState((prevState) => {
        return{
          instruments: prevState.instruments.concat([this.state.userInput]),
          userInput: ''
        }
      })
    }
  }

  handleClear(){
    this.setState({
      instruments: []
    })
  }

  componentDidUpdate(){
    console.log(this.state.instruments)
  }

  render() {
    const { userInput, instruments } = this.state
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>INSTRUMENT PALETTE</h1>
        <InstrumentInput 
            handleChange={ this.handleChange }
            handleKeyPress={ this.handleKeyPress }
            userInput={ userInput }
        />
        <InstrumentList instruments={ instruments }/>
        <ClearAllBtn handleClear={ this.handleClear }/>
      </div>
    );
  }
}

export default App;
