import React from 'react';

import './radiobutton.scss';

const RadioButton = ({ label, id, handleChange, ...props }) => {
	return (
		<div className='radioContainer'>
			<input
				id={id}
				type='radio'
				{...props}
				className='radioButton'
				onChange={handleChange}
			/>
			<div className='radioCircle' />
			<label className='radioLabel' htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
