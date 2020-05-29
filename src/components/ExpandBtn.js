import React from 'react'
import PropTypes from 'prop-types'

const ExpandBtn = ({title,icon,setPopUpActiveClass}) => {
    const onClick = () => {
        setPopUpActiveClass(true)
    }
    return (
        <button className='button is-link is-small' onClick={onClick}>
            <span className='icon'>
                <i className={icon}></i>
            </span>
            <span>{title}</span>
        </button>
    )
}

ExpandBtn.defaultProps = {
    title:'View',
    icon:'fas fa-plus'
}
ExpandBtn.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default ExpandBtn
