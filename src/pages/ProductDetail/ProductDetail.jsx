import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './productdetail.scss';

import Button from '../../components/CustomButton/CustomButton';

import { seller, sellerURL } from '../../redux/port';

const ProductDetail = (props) => {
	console.log(props.location.state);
	return (
		<div className='ProductDetail'>
			<div className='productContent'>
				<div className='productHeader'>
					<img
						src={`http://${sellerURL}:${seller}${props
							.location.state.productImage}`}
						alt='ikan'
						className='productImage'
					/>
					<div className='productInfo'>
						<div className='productName'>
							{props.location.state.productName}
						</div>
						<div className='productPrice'>
							{props.location.state.productPrice}
						</div>
					</div>
					<div className='productButtons'>
						<Button
							style={{
								backgroundColor: 'green',
								borderRadius: '.8rem',
								width: '8rem',
								marginRight: '2rem',
							}}
						>
							Add to cart
						</Button>
						<Button
							style={{
								backgroundColor: 'orange',
								borderRadius: '.8rem',
								width: '8rem',
							}}
						>
							Add to wishlist
						</Button>
					</div>
				</div>
				<div className='productBody'>
					<h2>Description</h2>
					<div className='descriptionText'>
						{ReactHtmlParser(
							props.location.state.productDescription,
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
