import React from 'react'
import TableRows from '../table/TableRows'
import axios from '../../axios'

export default class TableBody extends React.Component {
  state = {
    tableData: []
  }

  componentDidMount() {
    axios.get('/car/info')
      .then(res => {
        const tableData = res.data;
        this.setState({ tableData });
      })
  }

  render() {

    return (
        <tbody>
            <TableRows tableData={this.state.tableData}/>
        </tbody>
    )
  }
}
