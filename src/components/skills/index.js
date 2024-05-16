import React from 'react'
import Section from '../shared/section/Section'
import { headerInfo } from '../shared/section/headerInfo'
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