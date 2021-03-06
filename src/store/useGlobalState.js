import {useState} from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({popup : false, popupContent: [], offset: 0, tableData: [], activePage: 1, totalCount: 0});
    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState' :
                return setState(payload);
            default :
                return state;

        }
    }
    return {state, actions}
}

export default useGlobalState