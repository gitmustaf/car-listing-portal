import React from 'react'

const CardHeaderDeleteBtn = () => {
    return (
        <button className='button is-danger is-small'>
            <span className='icon'>
                <i className='fas fa-trash'></i>
            </span>
            <span>Delete</span>
        </button>
    )
}

export default CardHeaderDeleteBtn
