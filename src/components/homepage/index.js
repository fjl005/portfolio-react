import React from 'react'
import banner from '../../img/banner.png';

const Banner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img
                src={banner}
                className='homepage-banner'
                alt='home page banner'
            />
        </div>
    )
}

export default Banner;