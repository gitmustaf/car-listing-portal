import React from 'react'

const TableHeader = ({columns}) => {
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

export default TableHeader
