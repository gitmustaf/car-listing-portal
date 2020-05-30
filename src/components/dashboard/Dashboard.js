import React, {Fragment} from 'react'
import CarFilter from '../dashboard/CarFilter'
import RecordTable from '../table/RecordTable'

const Dashboard = () => {
    return (
        <Fragment>
            <CarFilter />
            <RecordTable />
        </Fragment>
    )
}

export default Dashboard
