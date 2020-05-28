import React from 'react'

const Search = () => {
    return (
            <div className="field control has-icons-left has-icons-right">
                <input className="input is-rounded" type="text" placeholder="Search car" />
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
                </span>
            </div>
    )
}

export default Search
