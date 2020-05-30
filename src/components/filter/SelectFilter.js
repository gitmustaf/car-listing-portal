import React from 'react'

const filter = (props) => {
    return (
        <div className="select is-fullwidth">
            <select>
                {props.options.map((value, index) => <option key={index}>{value}</option>)} 
            </select>
        </div>
        
    )
}

export default filter
