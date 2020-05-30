import React, {useContext, useRef} from 'react';
import Pagination from 'react-js-pagination';

import axios from '../axios';
import Context from '../store/context';

const PaginationComponent = () => {
  const {state, actions} = useContext(Context);
  const response = useRef();
  
  const setSate = (newStateValue, pageNo, offset) => {
    actions({type:'setState', payload: {...state, tableData: newStateValue['data'], totalCount:newStateValue['total_count'], activePage: pageNo, offset: offset}})
  } 
  
  const handleChange = (pageNo) => {
    const offset = (pageNo * 10 - 10);
    axios.get('/car/info', {
      params: {
        offset : pageNo * 10 - 10
      }
    }).then(res => {
    console.log(res)
    response.current = res.data;
    setSate(response.current, pageNo, offset);
  })};

  return (
      <div>
        <Pagination
          activePage={state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={state.totalCount}
          pageRangeDisplayed={5}
          onChange={(pageNo) => handleChange(pageNo)}
        />
      </div>
  )
}

export default PaginationComponent