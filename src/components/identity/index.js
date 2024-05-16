import React from 'react'
import Section from '../shared/section/Section'
import { headerInfo } from '../shared/section/headerInfo'
import AppContent from './app-content'

const Identity = () => {
    return (
        <Section
            headerInfo={headerInfo.intro}
            appContent={<AppContent />}
        />
    )
}

export default Identity;