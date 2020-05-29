import React from 'react'
import FilterAttribute from '../filer/filter'
import SearchField from '../Search' 
const CarFilter = () => {
    return (
        <div className='hero is-light is-bold'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-multiline'>
                        <div className='column is-2'>
                            <h1 className='title is-5'>
                                <span>Search car</span>
                            </h1>
                            <h2 className='subtitle is-6'>
                                Deals on wheels
                            </h2>
                        </div>
                        <div className='column is-6'>
                            <div className='columns is-multiline'>
                            <div className='column is-2'>
                                <FilterAttribute options = {['Make','BMW','VOLSKWAGEN','AUDI']}/>
                            </div>
                            <div className='column is-2'>
                                <FilterAttribute options = {['Model','Camry', 'Caliber', 'Elantra GT']}/>
                            </div>
                            <div className='column is-3'>
                                <FilterAttribute options = {['Year','2018','2019','2017']}/>
                            </div>
                            </div>
                        </div>
                        <div className='colum is-3'>
                            <SearchField />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarFilter
