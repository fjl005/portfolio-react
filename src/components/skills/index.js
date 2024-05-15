import React from 'react'
import Section from '../shared/Section'
import { headerInfo } from '../shared/headerInfo'
import AppContent from './app-content/index';

const Skills = () => {
    return (
        <Section
            headerInfo={headerInfo.skills}
            appContent={<AppContent />}
        />
    )
}

export default Skills