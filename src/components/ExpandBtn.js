import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import Context from '../store/context';

const ExpandBtn = ({title,icon,setPopUpActiveClass,value}) => {
    const onClick = () => {
        actions({type:'setState', payload: {...state, popupContent:value, popup:true}})
    }
  
    const {state, actions} = useContext(Context);
   
    return (
        <button className='button is-link is-small' onClick={onClick}>
            <span className='icon'>
                <i className={icon}></i>
            </span>
            <span>{title}</span>
        </button>
    )
}

ExpandBtn.defaultProps = {
    title:'View',
    icon:'fas fa-plus'
}
ExpandBtn.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default ExpandBtn
