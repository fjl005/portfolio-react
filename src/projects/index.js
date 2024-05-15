import React from 'react'
import { headerInfo } from '../shared/headerInfo'
import Section from '../shared/Section'
import AppContent from './appcontent/AppContent'

const Projects = () => {
    return (
        <Section
            headerInfo={headerInfo.projects}
            appContent={<AppContent />}
        />
    )
}

export default Projects