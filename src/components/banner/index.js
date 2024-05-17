import React from 'react'
import banner from '../../img/banner.png';
import styles from './banner.module.scss';

const Banner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img
                src={banner}
                className={styles['homepage-banner']}
                alt='home page banner'
            />
        </div>
    )
}

export default Banner;