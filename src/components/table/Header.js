import React from 'react'

const Header = ({columns}) => {
    return (
        <thead>
            <tr>
                {
                    columns.map((headingTitle,index) => (
                    <th key={index}>{headingTitle}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default Header
