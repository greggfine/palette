import React from 'react';
import './Instruments.css';

const Instrument = ({ instruments, clearInstrument }) => (
		instruments.map((instrument, index) => {
			return <li 
						key={ instrument }> 
						{ instrument } 
						<span
							onClick={(e) => clearInstrument(e, index) }>x</span>
					</li>
		})
	)

export default Instrument