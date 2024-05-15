import React from 'react'
import Section from '../shared/Section';
import { headerInfo } from '../shared/headerInfo';
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