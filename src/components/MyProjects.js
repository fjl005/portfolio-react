import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap';
import { projectsData } from '../data/projectsData';

const MyProjects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center pt-5' id='myProjects'>My Projects</h1>
                </Col>
            </Row>

            {projectsData.map((data) => (
                <Row key={data.title}>
                    <Col>
                        <h3 className='mt-3'>{data.title}</h3>
                        <p>
                            {data.description.map((text, idx) => (
                                <span key={idx}>
                                    {text.link ? (
                                        <a href={text.link} target='_blank' className='anchor-lightblue' rel='noreferrer'>
                                            {text.text}
                                        </a>
                                    ) : text.text}
                                </span>
                            ))}
                        </p>
                        {data.list && (

                            <ul>
                                {data.list.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>

                        )}
                        <div className='text-center'>
                            <img
                                src={data.img}
                                style={{ width: '75%' }}
                                alt={data.title}
                            />
                        </div>

                        <div className='my-3 projects-buttons-grid'>
                            <a href={data.previewLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-primary border-0'>Preview</Button>
                            </a>
                            <a href={data.frontendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0 frontend-button'>Frontend Code</Button>
                            </a>
                            <a href={data.backendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0'>Backend Code</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            ))}

            <Row>
                <Col>
                    <h3 className='mt-3'>Mint Replacement App (in progress)</h3>
                    <p>
                        I am currently working on a project with another developer to create a{' '}
                        <a href='https://mint.intuit.com/' className='anchor-lightblue' target='_blank' rel='noreferrer'>Mint</a>
                        {' '}replacement app, since the app is being shut down. This app can track your spending, categorize them, and help your overall budgeting with a seamless user interface.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyProjects