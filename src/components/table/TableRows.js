import React from 'react';

import DeleteBtn from '../CardHeaderDeleteBtn';
import ExpandBtn from '../ExpandBtn';

const TableRows = (props) => {
    return (
        props.tableData.map((value, index) => <tr key={index}>
        <td>{value[0]}</td>
        <td>{value[1]}</td>
        <td>{value[2]}</td>
        <td>{value[3]}</td>
        <td>{value[4]}</td>
        <td>{value[5]}</td>
        <td>{value[6]}</td>
        <td><a href={value[7]} target="_blank" rel="noopener noreferrer">{value[7]}</a></td>
        <td>
            <div className='buttons'>
                <ExpandBtn  value={value}/>
                <DeleteBtn />
            </div>
        </td>
    </tr>)
    )
}

export default TableRows
