import React from 'react'

const filter = ({options}) => {
    return (
        <div class="select">
            <select>
                {options.map((value, index) => <option key={index}>{value}</option>)} 
            </select>
        </div>
    )
}

export default filter
