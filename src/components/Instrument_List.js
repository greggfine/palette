import React from 'react';
import './Instrument_List.css';
import Instruments from './Instruments';

const InstrumentList = ({ instruments }) => (
		<ul>
			<Instruments instruments={ instruments }/>
		</ul>
	)

export default InstrumentList