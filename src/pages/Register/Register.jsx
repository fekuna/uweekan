import React, { Component } from 'react';

import ButtonOption from '../../components/ButtonOption/ButtonOption';

import BuyerRegister from './BuyerRegister/BuyerRegister';
import SellerRegister from './SellerRegister/SellerRegister';

import './register.scss';

class Register extends Component {
	state = {
		isBuyer: true,
	};

	optionLoginHandler = () => {
		this.setState((prevState) => ({
			isBuyer: !prevState.isBuyer,
		}));
	};

	render() {
		let content = <BuyerRegister />;
		if (!this.state.isBuyer) {
			content = <SellerRegister />;
		}

		return (
			<div className='register'>
				<div className='formContainer'>
					<div className='optionContainer'>
						<div
							onClick={this.optionLoginHandler}
							className={`${this.state.isBuyer
								? 'active'
								: ''} buyerButton`}
						>
							<ButtonOption
								isLogin={this.state.isBuyer}
							>
								As Buyer
							</ButtonOption>
						</div>
						<div
							onClick={this.optionLoginHandler}
							className={`${this.state.isBuyer
								? ''
								: 'active'} sellerButton`}
						>
							<ButtonOption
								isLogin={!this.state.isBuyer}
							>
								As Seller
							</ButtonOption>
						</div>
					</div>
					{content}
				</div>
			</div>
		);
	}
}

export default Register;
