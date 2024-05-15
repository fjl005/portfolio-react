import React from 'react'
import Section from '../shared/Section'
import { headerInfo } from '../shared/headerInfo'
import AppContent from './app-content'

const Journey = () => {
    return (
        <Section
            headerInfo={headerInfo.journey}
            appContent={<AppContent />}
        />
    )
}

export default Journey