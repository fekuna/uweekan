import React from 'react';

import { seller, sellerURL } from '../../redux/port'

import './cartitem.scss';

const CartItem = (props) => (
	<div className='itemContainer'>
		{console.log(props.items, 'image')}
		<img src={`http://${sellerURL}:${seller}${props.items.product_image}`} alt='ikan' className='itemImage' />
		<div className='itemDetailContainer'>
			<div className='itemName'>{props.items.product_name}</div>
			<div className='itemDetail'>
				<div className='itemPrice'>{`Rp.${props.items.product_price}`}</div>
				<div className='itemQty'>{`x${props.items.product_qty}`}</div>
			</div>
		</div>
	</div>
);

export default CartItem;
