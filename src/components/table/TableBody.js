import React, {useContext, useEffect, useRef, useCallback} from 'react';

import TableRows from '../table/TableRows';
import axios from '../../axios';
import Context from '../../store/context';

const TableBody = () => {
    const {state, actions} = useContext(Context);
    const response = useRef();

    const setSate = useCallback(
      (newStateValue) => {
        actions({type:'setState', payload: {...state, tableData: newStateValue['data'], totalCount:newStateValue['total_count']}})
      },[state, actions]);

    useEffect(() => {
      const fetchData = () => {
          axios.get('/car/info', {
          params: {
            offset : state.offset,
            functionType : 'getWithOffset',
            tableName: 'carCatalog'
          }
        }).then(res => {
          response.current = res.data;
          setSate(response.current)
          console.log(res)
        })
      };
      fetchData();
    }, []);

    return (
      <tbody>
            <TableRows tableData={state.tableData}/>
      </tbody>
    )
}

export default TableBody

