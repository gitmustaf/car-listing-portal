import React from 'react'

const PopUpContentTiles = ({title,titleValue}) => {
    return (
        <div className='column box is-6'>
            <strong>{title}</strong> :
            <span> {titleValue}</span>
        </div>
    )
}

export default PopUpContentTiles
