import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Dropdown from '../Dropdown/Dropdown';
import ProfileDropdownItem from '../profileDropdownItem/profileDropdownItem';

import { logoutUser } from '../../redux/auth/auth.actions'

import './profiledropdown.scss';

const ProfileDropdown = (props) => {
	return (
		<Dropdown>
			<div className='profileDropdown'>
				<ProfileDropdownItem
					onClick={() => props.history.push('/profile')}
					name='Profile'
					style={{ color: 'black' }}
				/>
				<ProfileDropdownItem
					onClick={() => props.history.push('/setting')}
					name='Setting'
				/>
				<ProfileDropdownItem
					onClick={() => props.onLogout()}
					name='Logout'
					style={{ color: 'red' }}
				/>
			</div>
		</Dropdown>
	);
};

const mapDispatchToProps = dispatch => ({
	onLogout: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(withRouter(ProfileDropdown));
