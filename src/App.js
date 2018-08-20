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
    this.clearInstrument=this.clearInstrument.bind(this)
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

  clearInstrument(e, index){
    this.setState((prevState)=> {
      return{
        instruments: prevState.instruments.filter((instrument)=> {
          return instrument !== prevState.instruments[index]
        })
      }
    })
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
        <InstrumentList 
            instruments={ instruments }
            clearInstrument={ this.clearInstrument }
          />
        <ClearAllBtn handleClear={ this.handleClear }/>
      </div>
    );
  }
}

export default App;
