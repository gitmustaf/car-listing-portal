import React from 'react'
import DeleteButton from '../Buttons'

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
            <DeleteButton />
            </td>
        </tr>
    )
}

export default TableRows
