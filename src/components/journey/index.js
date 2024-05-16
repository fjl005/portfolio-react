import React from 'react'
import Section from '../shared/section'
import { headerInfo } from '../shared/section/headerInfo'
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