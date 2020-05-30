import React, {useContext} from 'react'

import PopUpContentTiles from './PopUpContentTiles';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import Context from '../store/context';

const PopupModal = ({closeModal}) => {
    const onCloseModal = (e) => {
        actions({type:'setState', payload: {...state, popup:false}})
    }
    const {state, actions} = useContext(Context);

    return (
        <div className='modal is-active'>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className='card'>
                    <CardHeader vinValue={state.popupContent[1]} />
                    <div className='card-content'>
                        <div className='columns is-multiline'>
                            <PopUpContentTiles title='Make' titleValue={state.popupContent[2]} />
                            <PopUpContentTiles title='Model' titleValue={state.popupContent[3]} />
                            <PopUpContentTiles title='Year' titleValue={state.popupContent[4]} />
                            <PopUpContentTiles title='Mileage' titleValue={state.popupContent[5]} />
                            <PopUpContentTiles title='CR' titleValue={state.popupContent[6]} />
                            <PopUpContentTiles title='Location' titleValue={state.popupContent[8]} />
                            <PopUpContentTiles title='Date' titleValue={state.popupContent[9]} />
                        </div>
                    </div>
                    <CardFooter linkUrl={state.popupContent[7]} />
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onCloseModal}></button>
        </div>
    )
}

export default PopupModal
