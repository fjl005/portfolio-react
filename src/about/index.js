import React from 'react'
import Section from '../shared/Section'
import { headerInfo } from '../shared/headerInfo'

const About = () => {
    return (
        <Section
            headerInfo={headerInfo.about}
            appContent={'waddup'}
        />
    )
}

export default About