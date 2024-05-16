import React from 'react'
import { headerInfo } from '../shared/headerInfo'
import Section from '../shared/Section'
import AppContent from './app-content/index'
import NavbarApp from '../navbar'

const Projects = () => {
    return (
        <div className='body-background'>
            <NavbarApp />
            <Section
                headerInfo={headerInfo.projects}
                appContent={<AppContent />}
            />
        </div>
    )
}

export default Projects