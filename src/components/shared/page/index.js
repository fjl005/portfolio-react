import React from 'react'
import NavbarApp from '../../navbar'
import VideoBackground from './VideoBackground'

const Page = ({ pageContent }) => {
    return (
        <div className='body-background'>
            <VideoBackground />
            <NavbarApp />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {pageContent}
            </div>

        </div>
    )
}

export default Page