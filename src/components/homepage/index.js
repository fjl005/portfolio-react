import React from 'react'
import Banner from '../banner';
import NavbarApp from '../navbar';
import Skills from '../skills';
import Journey from '../journey';
import Timeline from '../timeline';


const HomePage = () => {
    return (
        <div className='body-background'>
            <NavbarApp />
            <Banner />
            <Skills />
            <Journey />
            <Timeline />
        </div>

    )
}

export default HomePage;