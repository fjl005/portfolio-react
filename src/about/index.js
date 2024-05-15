import React from 'react'
import Section from '../shared/Section'
import { headerInfo } from '../shared/headerInfo'
import AppContent from './app-content'

const About = () => {
    return (
        <Section
            headerInfo={headerInfo.about}
            appContent={<AppContent />}
        />
    )
}

export default About