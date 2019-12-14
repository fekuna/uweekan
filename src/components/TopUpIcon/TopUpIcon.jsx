import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCoin } from '../../redux/coin/coin.actions';

import { ReactComponent as Icon } from '../../assets/plus-square-solid.svg';

import './topupicon.scss';
const TopUpIcon = (props) => {
	useEffect(() => {
		props.onGetCoin();
	});

	return (
		<div className='topUpIcon'>
			<div className='iconContainer'>
				<Icon class='icon' onClick={() => props.history.push('/topup')} />
				<div className='iconText'>
					{props.balance ? 'Rp.' + props.balance : 'Rp.' + 0}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	balance: state.coin.balance,
});

const mapDispatchToProps = (dispatch) => ({
	onGetCoin: () => dispatch(getCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(TopUpIcon),
);
