import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Button from '../CustomButton/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';

import { seller, sellerURL } from '../../redux/port';

import './card.scss';

const Card = ({
	id,
	productImage,
	productPrice,
	productName,
	productDescription,
	...props
}) => {
	const addToCartHandler = () => {
		const data = {
			product_id: id,
			product_name: productName,
			product_image: productImage,
			product_price: productPrice,
		};

		props.onAddToCart(data);
	};
	return (
		<div className='card'>
			<Link
				to={{
					pathname: '/productdetail',
					state: {
						id,
						productImage,
						productPrice,
						productName,
						productDescription,
					},
				}}
			>
				<div className='imageContainer'>
					<img
						src={`http://${sellerURL}:${seller}${productImage}`}
						className='cardImage'
						alt='ikan'
					/>
				</div>
			</Link>
			<div className='cardDetailContainer'>
				<div className='cardDetail'>
					<div className='cardTitle'>{productName}</div>
					{/* <div className='cardPrice'>Rp.{productPrice}</div> */}
					<div className='cardPrice'>
						{
							<NumberFormat
								value={productPrice}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'Rp. '}
							/>
						}
					</div>
				</div>
				<div className='buttonContainer'>
					<Button onClick={addToCartHandler}>Buy</Button>
				</div>
			</div>
		</div>
	);
};

const mapDispachToProps = (dispatch) => ({
	onAddToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispachToProps)(Card);
