import React from 'react'

import './notification.scss'

const Notification = (props) => (
    <div className="notifContainer">
        <div className="notif">{props.cartItemsCount}</div>
    </div>
)

export default Notification