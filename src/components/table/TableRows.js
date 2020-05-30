import React, {useContext} from 'react';

import DeleteBtn from '../CardHeaderDeleteBtn';
import ExpandBtn from '../ExpandBtn';
import Context from '../../store/context';

const TableRows = (props) => {
    
    const {state} = useContext(Context);
    
    return (
        props.tableData.map((value, index) => <tr key={index}>
        <td>{index+1+state.offset}</td>
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
