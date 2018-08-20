import React from 'react';
import './Instrument_List.css';
import Instruments from './Instruments';

const InstrumentList = ({ instruments, clearInstrument }) => (
		<ul>
			<Instruments 
				instruments={ instruments }
				clearInstrument={ clearInstrument }
			/>
		</ul>
	)

export default InstrumentList