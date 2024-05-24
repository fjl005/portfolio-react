import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownContent = ({ projectInfo }) => {
    const AnchorComponent = (props) => (
        <a className='anchor-lightblue' {...props} target='_blank'>
            {props.children}
        </a>
    );

    const H3Component = (props) => (
        <h3 style={{ marginTop: '2rem' }} {...props}>
            {props.children}
        </h3>
    );

    const ImageComponent = (props) => (
        <img style={{ width: '100%', maxWidth: '1000px' }} {...props} alt='alt'>
            {props.children}
        </img>
    );

    const components = {
        a: AnchorComponent,
        h3: H3Component,
        img: ImageComponent,
    };

    return (
        <ReactMarkdown components={components} children={projectInfo.markdownContent} />
    )
}

export default MarkdownContent;