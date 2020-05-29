import React from 'react'

const PopupModal = ({closeModal}) => {
    const onCloseModal = (e) => {
        closeModal();
    }
    return (
        <div className='modal is-active'>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className='box'>
                    here
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onCloseModal}></button>
        </div>
    )
}

export default PopupModal
