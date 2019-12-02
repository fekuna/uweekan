import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Link } from 'react-router-dom';

import FormInput from '../../../components/form-input/form-input.component';
import Button from '../../../components/CustomButton/CustomButton';

import './Seller.scss';
import { sellerLogin } from '../../../redux/auth/auth.actions';

class Seller extends Component {
	state = {
		username: '',
		password: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { username, password } = this.state;
		const userData = {
			username,
			password,
		};

		console.log('submit nih', userData)

		this.props.onSellerLogin(userData, this.props.history)
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Fragment>
				<div className='textContainer'>
					<h2>I already have an account</h2>
					<span>
						Sign in with your username and password as
						Seller !
					</span>
				</div>

				<form className='formInput' onSubmit={this.handleSubmit}>
					<FormInput
						name='username'
						type='input'
						handleChange={this.handleChange}
						value={this.state.username}
						label='username'
						required
					/>
					<FormInput
						name='password'
						type='password'
						handleChange={this.handleChange}
						value={this.state.password}
						label='password'
						required
					/>
					<div className='formFooter'>
						<Link
							className='fPassword-link'
							to='/forgetpassword'
						>
							<div className='fPassword'>
								Forget Password
							</div>
						</Link>
						<div className='btn'>
							<Button style={{ width: '9rem' }}>
								SIGN IN
							</Button>
						</div>
					</div>
				</form>

                <div className="registerOption">
                    <div className="registerOptionText">
                        don't have any account ?
                    </div>
                    <Button style={{width: '17rem', height: '7rem'}}>
                        Register
                    </Button>
                </div>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onSellerLogin: (data, history) => dispatch(sellerLogin(data, history))
})

export default connect(null, mapDispatchToProps)(withRouter(Seller));
