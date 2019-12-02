import React, { Component } from 'react';

import ButtonOption from '../../components/ButtonOption/ButtonOption';

import BuyerLogin from './BuyerLogin/Buyer'
import SellerLogin from './SellerLogin/Seller'

import './login.scss';

class Login extends Component {
	state = {
		isLogIn: true,
		username: '',
		password: '',
	};

	optionLoginHandler = () => {
		this.setState((prevState) => ({
			isLogIn: !prevState.isLogIn,
		}));
	};

	
	render() {
		let loginAs = <BuyerLogin />

		if(this.state.isLogIn) {
			loginAs = <BuyerLogin />
		}else{
			loginAs = <SellerLogin />
		}

		return (
			<div className='login'>
				<div className='formContainer'>
					<div className='optionContainer'>
						<div
							onClick={this.optionLoginHandler}
							className={`${this.state.isLogIn
								? 'active'
								: ''} buyerButton`}
						>
							<ButtonOption
								isLogin={this.state.isLogIn}
							>
								As Buyer
							</ButtonOption>
						</div>
						<div
							onClick={this.optionLoginHandler}
							className={`${this.state.isLogIn
								? ''
								: 'active'} sellerButton`}
						>
							<ButtonOption
								isLogin={!this.state.isLogIn}
							>
								As Seller
							</ButtonOption>
						</div>
					</div>

					{loginAs}
				</div>
			</div>
		);
	}
}

export default Login;
