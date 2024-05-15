import React from 'react'
import { headerInfo } from '../shared/headerInfo'
import Section from '../shared/Section'
import AppContent from './app-content/index'

const Projects = () => {
    return (
        <Section
            headerInfo={headerInfo.projects}
            appContent={<AppContent />}
        />
    )
}

export default Projects