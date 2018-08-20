import React from 'react';
import './ClearAllBtn.css';

const ClearAllBtn = ({ handleClear }) => (
	<button 
		onClick={ handleClear }>Clear All</button>
)

export default ClearAllBtn