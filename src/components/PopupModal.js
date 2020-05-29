import React from 'react'
import PopUpContentTiles from './PopUpContentTiles';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const PopupModal = ({closeModal}) => {
    const onCloseModal = (e) => {
        closeModal();
    }
    return (
        <div className='modal is-active'>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className='card'>
                    <CardHeader vinValue='abc' />
                    <div className='card-content'>
                        <div className='columns is-multiline'>
                            <PopUpContentTiles title='Make' titleValue='Volkswagon' />
                            <PopUpContentTiles title='Model' titleValue='Superz 2020' />
                            <PopUpContentTiles title='Year' titleValue='2020' />
                            <PopUpContentTiles title='Mileage' titleValue='20 Km / ltr' />
                            <PopUpContentTiles title='CR' titleValue='NAN' />
                            <PopUpContentTiles title='Location' titleValue='Bengaluru, India' />
                            <PopUpContentTiles title='Date' titleValue='20/06/2020' />
                        </div>
                    </div>
                    <CardFooter linkUrl='https://datagrokr.com' />
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onCloseModal}></button>
        </div>
    )
}

export default PopupModal
