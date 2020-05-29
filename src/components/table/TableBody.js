import React, { useEffect,useState } from 'react'
import TableRows from '../table/TableRows'
import axios from 'axios'

const TableBody = ({setPopUpActiveClass}) => {
    const [carData,setCarData] = useState([]);
    const setPopUpClassToSet = (isActive) => {
        setPopUpActiveClass(isActive);
    }
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://krabhp3hz3.execute-api.us-east-1.amazonaws.com/car/info',
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                  }
            }
          )
     
        //   setCarData(result.data);
        };
     
        fetchData();
        console.log(carData);
      });
    return (
        <tbody>
            <TableRows setPopUpClassToSet={setPopUpClassToSet} />
        </tbody>
    )
}

export default TableBody
