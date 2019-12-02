import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import FormInput from '../../../components/form-input/form-input.component';
import Button from '../../../components/CustomButton/CustomButton';

import { buyerLogin } from '../../../redux/auth/auth.actions'

import './Buyer.scss';

class Buyer extends Component {
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

		this.props.onBuyerLogin(userData, this.props.history)
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
						Buyer !
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
                    <div className="registerOption--Text">
                        don't have any account ?
                    </div>
                    <Button style={{width: '17rem', height: '4rem'}}>
                        Register
                    </Button>
                </div>
			</Fragment>
		);
	}
}


// const mapStateToProps = state => {

// }

const mapDispatchToProps = dispatch => ({
	onBuyerLogin: (buyerData, history) => dispatch(buyerLogin(buyerData, history))
})

export default connect(null, mapDispatchToProps)(withRouter(Buyer));
