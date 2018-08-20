import React from 'react';
import './Instrument_Input.css';

const InstrumentInput = ({ handleChange, handleKeyPress, userInput }) => (
	<input type="text" 
		   placeholder="Enter instrument name"
		   onChange={(e) => handleChange(e)}
		   onKeyPress={(e) => handleKeyPress(e) }
		   value={ userInput }
	/>
	)

export default InstrumentInput