import React from 'react';

import './custombutton.scss';

const CustomButton = (props) => (
	<button
		className={`${props.login ? 'loginButton' : ''} ${props.register ? 'registerButton' : ''} customButton`}
		style={{ ...props.style }}
		onClick={props.onClick}
	>
		{props.children}
	</button>
);

export default CustomButton;
