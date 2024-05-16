import React from 'react'
import Section from '../shared/section/Section';
import { headerInfo } from '../shared/section/headerInfo';
import ContactForm from './app-content';

const Contact = () => {
    return (
        <Section
            headerInfo={headerInfo.contact}
            appContent={<ContactForm />}
        />
    )
}

export default Contact;