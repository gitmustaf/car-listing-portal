import React from 'react'
import CardHeaderDeleteBtn from './CardHeaderDeleteBtn'

const CardHeader = ({vinValue}) => {
    return (
        <header className='card-header'>
            <p className='card-header-title'>
                VIN : {vinValue}
            </p>
            <span className='card-header-icon'>
                <CardHeaderDeleteBtn />
            </span>
        </header>
    )
}

export default CardHeader
