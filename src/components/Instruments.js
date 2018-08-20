import React from 'react';
import './Instrument.css';

const Instrument = ({ instruments }) => (
		instruments.map((instrument) => {
			return <li key={ instrument }> { instrument } </li>
		})
	)

export default Instrument