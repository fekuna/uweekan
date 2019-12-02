import React from 'react';


import './profileDropdownItem.scss';

const profileDropdownItem = (props) => {
	return (
		<div className='profileDropdownItem' >
			<div className='dropdownItemText' {...props}>{props.name}</div>
		</div>
	);
};

export default profileDropdownItem;
