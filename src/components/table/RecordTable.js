import React, { useState } from 'react'
// importing modules
import TableHeader from './Header'
import TableBody from './TableBody'
import PopupModal from '../PopupModal'

const RecordTable = () => {
    const [popUpActive,setActive] = useState(false);
    // list of table headers
    // const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Location','Date','Options']
    const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Option']
    const setPopUpActiveClass = (isActive) => {
        setActive(isActive);
        console.log(popUpActive);
    }
    const closeModal = () => {
        setActive(false);
    }
    return (
        <div className='container'>
            <div className='columns is-multiline'>
                <div className='column is-centered'>
                    <br />
                    <div className='box'>
                        <div className='table-container'>
                            <table className='table is-fullwidth is-hoverable is-narrow'>
                                <TableHeader columns={tableHeads} />
                                <TableBody setPopUpActiveClass={setPopUpActiveClass} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal component */}
            {popUpActive && <PopupModal closeModal={closeModal} />}
        </div>
    )
}

export default RecordTable
