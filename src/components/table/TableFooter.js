import React from 'react';
import PaginationComponent from '../Pagination';

const TableFooter = (props) => {
    return (
        <tfoot className="tfoot">
            <tr className="is-fullwidth">
            <td colSpan="9">
            <PaginationComponent />
            </td>
            </tr>
        </tfoot>
    )
}

export default TableFooter
