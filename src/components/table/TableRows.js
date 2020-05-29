import React from 'react'
import ExpandBtn from '../ExpandBtn';
import DeleteBtn from '../Buttons';

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
            <td>
                <div className='buttons'>
                    <ExpandBtn />
                    <DeleteBtn />
                </div>
            </td>
        </tr>
    )
}

export default TableRows
