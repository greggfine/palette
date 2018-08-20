import React, { Component } from 'react';
import './App.css';
import InstrumentInput from './components/Instrument_Input';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      userInput: '',
      instruments: []
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
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

  componentDidUpdate(){
    console.log(this.state.instruments)
  }

  render() {
    const { userInput } = this.state
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>INSTRUMENT PALETTE</h1>
        <InstrumentInput 
            handleChange={ this.handleChange }
            handleKeyPress={ this.handleKeyPress }
            userInput={ userInput }
        />
      </div>
    );
  }
}

export default App;
