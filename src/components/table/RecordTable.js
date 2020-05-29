import React from 'react'
// importing modules
import TableHeader from './Header'
import TableBody from './TableBody'

const RecordTable = () => {
    // list of table headers
    // const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Location','Date','Options']
    const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Option']
    return (
        <div className='container'>
            <div className='columns is-multiline'>
                <div className='column is-centered'>
                    <br />
                    <div className='box'>
                        <div className='table-container'>
                            <table className='table is-fullwidth is-hoverable is-narrow'>
                                <TableHeader columns={tableHeads} />
                                <TableBody />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordTable
