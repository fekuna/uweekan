import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './navigation.scss';
import CartIcon from '../CartIcon/CartIcon';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Button from '../CustomButton/CustomButton';

const Navigation = (props) => {
	const {isAuthenticated} = props

	return (
		<div className='navContainer'>
			<div className='nav'>
				<Link className='logo-container'>Logo</Link>

				<div className='options'>
					<Link className='option' to="/">SHOP</Link>
					<Link className='option' to="/contact">Contact us</Link>
					<CartIcon />
					{isAuthenticated ? (
						<ProfileMenu />
					) : (
						<Fragment>
							<Button
								onClick={() =>
									props.history.push('/register')}
								register
								style={{ marginLeft: '5rem' }}
							>
								Register
							</Button>
							<Button
								onClick={() =>
									props.history.push('/login')}
								login
								style={{ marginLeft: '.7rem' }}
							>
								Log In
							</Button>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(Navigation));
