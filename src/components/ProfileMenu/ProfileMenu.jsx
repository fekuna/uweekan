import React, { useState } from 'react';

import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';

import './profilemenu.scss';

const ProfileMenu = (props) => {
	const [profileClicked, setProfileClicked] = useState(false)

	const iconClickHandler = () => {
		setProfileClicked(prevState => !prevState)
	}
	

	return (
		<div className='profileContainer' onClick={iconClickHandler}>
			<img
				src={
					'https://images.unsplash.com/photo-1496671431883-c102df9ae8f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=84d0b5da11ab2535ea4d207095366988'
				}
				alt='profile'
				className='profileImage'
			/>
			{profileClicked ? <ProfileDropdown /> : null}
		</div>
	);
};

export default ProfileMenu;
