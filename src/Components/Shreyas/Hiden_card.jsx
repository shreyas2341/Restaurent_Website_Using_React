import React from 'react'
import Cards from './Cards';
import Card_data from './Card_data';

export default function Hiden_card() {
    return (
        <div className='carddiv grids container'>
            {
                Card_data.map((val) => {

                    return (
                        <Cards name={val.movie_name} img={val.movie_img} desc={val.movie_desc} />
                    )
                })
            }
        </div>
    )
}
