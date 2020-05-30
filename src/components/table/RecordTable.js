import React, {useContext } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import PopupModal from '../PopupModal';
import Pagination from '../Pagination';
import Context from '../../store/context';

const RecordTable = () => {
    const tableHeads = ['S.no.','VIN','Make','Model','Year','Mileage','CR','URL','Option']

    const {state} = useContext(Context);    
    return (
        <div className='container'>
            <div className='columns is-multiline'>
                <div className='column is-centered'>
                    <br />
                    <div className='box'>
                        <div className='table-container'>
                            <table className='table is-fullwidth is-hoverable is-narrow'>
                                <TableHeader columns={tableHeads} />
                                <TableBody  />
                                <TableFooter footerContent={Pagination}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal component */}
            {state.popup && <PopupModal />}
        </div>
    )
}

export default RecordTable
