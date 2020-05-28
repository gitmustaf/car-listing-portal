import React from 'react'

const TableRows = () => {
    return (
        <tr>
            <td>1</td>
            <td>ABC</td>
            <td>Volkswagen</td>
            <td>City 200</td>
            <td>2016</td>
            <td>20 km/ltr</td>
            <td>NAN</td>
            <td>Click</td>
            <td>Bengaluru,IN</td>
            <td>12/02/2020</td>
            <td>
            <button className='button is-light is-small'>
                <i className='fas fa-trash'></i>
            </button>
            </td>
        </tr>
    )
}

export default TableRows
