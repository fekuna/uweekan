import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/CustomButton/CustomButton';
import RadioButton from '../../components/RadioButton/RadioButton';

import { registerUser } from '../../redux/auth/auth.actions';

import './register.scss';

class Register extends Component {
	state = {
		username: '',
		password: '',
		confirmPass: '',
		email: '',
		sex: null,
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const {
			username,
			password,
			confirmPass,
			email,
			sex,
		} = this.state;
		const userData = {
			username,
			password,
			email,
			sex,
		};

		if(password !== confirmPass) {
			return alert('Password is not match')
		}

		this.props.onRegister(userData, this.props.history)

	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='register'>
				<div className='formContainer'>
					<div className='textContainer'>
						<h2>I don't have an account</h2>
						<span>
							Complete these form below to get your
							account
						</span>
					</div>

					<form
						className='formInput'
						onSubmit={this.handleSubmit}
					>
						<FormInput
							name='username'
							type='input'
							handleChange={this.handleChange}
							value={this.state.username}
							label='username'
							required
						/>
						<FormInput
							name='email'
							type='email'
							handleChange={this.handleChange}
							value={this.state.email}
							label='email'
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
						<FormInput
							name='confirmPass'
							type='password'
							handleChange={this.handleChange}
							value={this.state.confirmPass}
							label='Confirm Password'
							required
						/>
						<div className='radioOptions'>
							<RadioButton
								label='Male'
								name='sex'
								value={1}
								id='male'
								handleChange={this.handleChange}
							/>
							<RadioButton
								label='Female'
								name='sex'
								value={0}
								id='female'
								handleChange={this.handleChange}
							/>
						</div>
						<div className='formFooter'>
							<div className='btn'>
								<Button style={{ width: '9rem' }}>
									SIGN Up
								</Button>
							</div>
						</div>
					</form>

					<div className='registerOption'>
						<div className='registerOption--Text'>
							do you have an account ?
						</div>
						<Button
							style={{ width: '17rem', height: '4rem' }}
						>
							Sign in
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onRegister: (data, history) =>
		dispatch(registerUser(data, history)),
});

export default connect(null, mapDispatchToProps)(Register);
