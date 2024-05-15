import React from 'react'
import Section from '../shared/Section'
import { headerInfo } from '../shared/headerInfo'
import AppContent from './app-content'

const Intro = () => {
    return (
        <Section
            headerInfo={headerInfo.intro}
            appContent={<AppContent />}
        />
    )
}

export default Intro;