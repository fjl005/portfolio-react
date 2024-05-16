import React from 'react'
import PageContent from './page-content';
import Page from '../shared/page';

const HomePage = () => {
    return (
        <Page pageContent={<PageContent />} />
    )
}

export default HomePage;