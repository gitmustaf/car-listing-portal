import React from 'react'

const CardFooter = ({linkUrl}) => {
    return (
        <footer className='card-footer'>
            <a href={linkUrl} className="card-footer-item">Visit Url</a>
        </footer>
    )
}

export default CardFooter
