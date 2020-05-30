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
        offset : pageNo * 10 - 10,
        functionType : 'getWithOffset',
        tableName: 'carCatalog'
      }
    }).then(res => {
    console.log(res)
    response.current = res.data;
    setSate(response.current, pageNo, offset);
  })};

  return (
      <center>
        <br />
        <Pagination
          activePage={state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={state.totalCount}
          pageRangeDisplayed={5}
          onChange={(pageNo) => handleChange(pageNo)}
          innerClass='pagination is-rounded is-right'
          activeClass='is-current'
          itemClass='pagination-link'
          activeLinkClass='has-text-light'
          itemClassPrev='pagination-previous'
          itemClassNext='pagination-next'
          hideDisabled
          firstPageText='First'
          lastPageText='Last page'
          nextPageText='Next page'
          prevPageText='Previous'
        />
      </center>
  )
}

export default PaginationComponent