import React from 'react'
import banner from '../../img/banner.png';
import NavbarApp from '../navbar';
import Skills from '../skills';
import Journey from '../journey';
import Timeline from '../timeline';


const HomePage = () => {
    return (
        <div className='body-background'>
            <NavbarApp />
            <div className='d-flex justify-content-center'>
                <img
                    src={banner}
                    className='homepage-banner'
                    alt='home page banner'
                />
            </div>
            <Skills />
            <Journey />
            <Timeline />
        </div>

    )
}

export default HomePage;