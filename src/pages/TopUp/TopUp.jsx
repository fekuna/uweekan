import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/CustomButton/CustomButton';

import { coinTopUp } from '../../redux/coin/coin.actions';

import './topup.scss';

class TopUp extends Component {
	state = {
		nominal: '',
	};

	inputChangeHandler = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className='topUpContainer'>
				<div className='topUp'>
					<div className='topupForm'>
						<FormInput
							name='nominal'
							type='number'
							style={{ marginTop: '0' }}
							handleChange={this.inputChangeHandler}
							value={this.state.nominal}
							label='Nominal'
						/>
						<Button
							onClick={() =>
								this.props.onTopUp(
									this.state.nominal,
									this.props.history,
								)}
							style={{ width: '8rem' }}
						>
							Top Up
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onTopUp: (nominal, history) =>
		dispatch(coinTopUp(nominal, history)),
});

export default connect(null, mapDispatchToProps)(TopUp);
