import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap';
import { projectsData } from '../data/projectsData';
import { faMagnifyingGlass, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyProjects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='h1-title' id='projects'>My Projects</h1>
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
                                className='project-image'
                                alt={data.title}
                            />
                        </div>

                        <div className='my-3 projects-buttons-grid'>
                            <a href={data.previewLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-primary border-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <span className='fa-ml-1'>Preview</span>
                                </Button>
                            </a>
                            <a href={data.frontendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0 frontend-button'>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                    <span className='fa-ml-1'>Frontend Code</span>
                                </Button>
                            </a>
                            <a href={data.backendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0'>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                    <span className='fa-ml-1'>Backend Code</span>
                                </Button>
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
};

export default MyProjects;