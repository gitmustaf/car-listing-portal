import React from 'react'
import FilterAttribute from '../filter/SelectFilter'
import SearchField from '../Search' 
const CarFilter = () => {
    return (
        <div className='hero is-light is-bold'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-2-desktop is-12-tablet is-12-mobile'>
                            <h1 className='title is-5'>
                                <span>Search car</span>
                            </h1>
                            <h2 className='subtitle is-6'>
                                Deals on wheels
                            </h2>
                        </div>
                        <div className='column is-8-desktop is-12-mobile'>
                            <div className='columns'>
                            <div className='column is-3'>
                                <FilterAttribute options = {['Make','BMW','VOLSKWAGEN','AUDI']}/>
                            </div>
                            <div className='column is-3'>
                                <FilterAttribute options = {['Model','Camry', 'Caliber', 'Elantra GT']}/>
                            </div>
                            <div className='column is-2'>
                                <FilterAttribute options = {['Year','2018','2019','2017']}/>
                            </div>
                            </div>
                        </div>
                        <div className='colum is-2-desktop is-12-tablet is-12-mobile'>
                            <SearchField />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarFilter
