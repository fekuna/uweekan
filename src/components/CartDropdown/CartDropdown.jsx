import React from 'react';
import { withRouter } from 'react-router-dom'

import DropDown from '../Dropdown/Dropdown';
import CartItem from '../CartItem/CartItem';
import Button from '../CustomButton/CustomButton';


import './cartdropdown.scss';

const CartDropdown = (props) => {
	return (
		<DropDown>
			<div className='cartDropdown'>
				<div className='itemsContainer'>
					{props.items.map((item) => (
						<CartItem items={item} />
					))}
				</div>
                <Button onClick={() =>  props.history.push('/checkout')} style={{width: '100%'}}>CHECK OUT</Button>
			</div>
		</DropDown>
	);
};

export default withRouter(CartDropdown);
