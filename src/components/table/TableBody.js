import React from 'react'
import TableRows from '../table/TableRows'

const TableBody = ({setPopUpActiveClass}) => {
    const setPopUpClassToSet = (isActive) => {
        setPopUpActiveClass(isActive);
        console.log(`isactive body ${isActive}`)
    }
    return (
        <tbody>
            <TableRows setPopUpClassToSet={setPopUpClassToSet} />
        </tbody>
    )
}

export default TableBody
