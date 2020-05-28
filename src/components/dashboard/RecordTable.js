import React from 'react'
// importing modules
import TableHeader from '../Table/Header'
import TableBody from '../Table/TableBody'

const RecordTable = () => {
    // list of table headers
    const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Location','Date','Options']
    return (
        <div className='section'>
            <div className='container box'>
                <table className='table is-fullwidth is-hoverable'>
                    <TableHeader columns={tableHeads} />
                    <TableBody />
                </table>
            </div>
        </div>
    )
}

export default RecordTable
