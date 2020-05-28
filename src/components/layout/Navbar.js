import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon,title }) => {
    return (
        <nav className='navbar is-dark'>
            <div className='container'>
                <div className='navbar-brand'>
                    <span className='navbar-item'>
                        <i className={icon}></i>
                    </span>
                    <a href='/' className='navbar-item'>
                        <strong>{title}</strong>
                    </a>
                </div>
            </div>
        </nav>
    )
}
// default prop types
Navbar.defaultProps = {
    icon:'fas fa-car-side',
    title:'Car Dealer'
}

// prop types defined
Navbar.propTypes = {
    icon:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default Navbar
