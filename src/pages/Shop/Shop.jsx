import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './shop.scss';

import Card from '../../components/Card/Card';

import Button from '../../components/CustomButton/CustomButton';

import { getItems } from '../../redux/shop/shop.actions';

const Shop = (props) => {
	useEffect(() => {
		props.onGetItems();
	}, []);

	console.log(props.items);

	return (
		<div className='shopContainer'>
			<div className='headerElements'>
				<div className='title'>Get fresh fish now!</div>
				{localStorage.getItem('role') === 'seller' ? (
					<Button
						style={{
							width: '20rem',
							height: '3.5rem',
							marginRight: '13rem',
						}}
						onClick={() =>
							props.history.push('/addproduct')}
					>
						Add new product
					</Button>
				) : null}
			</div>
			<div className='items'>
				{props.items.map((item) => (
					<div className='item' key={item.id}>
						{console.log(item)}
						<Card
							id={item.id}
							productImage={item.product_image}
							productPrice={item.product_price}
							productName={item.product_name}
							productDescription={item.product_desc}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.shop.data,
});

const mapDispatchToProps = (dispatch) => ({
	onGetItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
