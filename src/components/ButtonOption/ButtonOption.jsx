import React from 'react'

import './buttonoption.scss'

const ButtonOption = (props) => {
    return (
        <div className={`${props.isLogin ? 'active': ''} buttonOption`}>
            {props.children}
        </div>
    )
}

export default ButtonOption;