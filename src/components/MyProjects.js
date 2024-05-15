import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap';
import { projectsData } from '../data/projectsData';
import { faMagnifyingGlass, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetsyImage from '../img/fetsyImage.png';

const MyProjects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='h1-title text-center' id='projects'>My Projects</h1>
                </Col>
            </Row>

            {projectsData.map((data) => (
                <Row key={data.title}>
                    <Col className='mb-4'>
                        <h2 className='mt-3 project-title'>{data.title}</h2>
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

                        <h3 className='project-concepts'>General Concepts</h3>
                        <ul>
                            {data.list.map(point => (
                                <li key={point}>
                                    {point.nested ? (
                                        <>
                                            {point.header}
                                            <ul>
                                                {point.list.map(subpoint => (
                                                    <li key={subpoint}>{subpoint}</li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : point}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            ))}

            <Row>
                <Col>
                    <h2 className='mt-3'>Mint Replacement App (in progress)</h2>
                    <p>
                        I am currently working on a project with another developer to create a{' '}
                        <a href='https://mint.intuit.com/' className='anchor-lightblue' target='_blank' rel='noreferrer'>Mint</a>
                        {' '}replacement app, as the app is being shut down. This app can track your spending, categorize them, and guide overall budgeting with a seamless user interface.
                    </p>
                </Col>
            </Row>

            {/* <Row>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Fetsy Shop Online</h2>
                                <img src={fetsyImage} alt='fetsy' style={{ width: '90%', objectFit: 'contain' }} />
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row> */}

            <Row>
                <Col xs='12' className='text-center'>
                    <h2>Fetsy Shop Online (MERN)</h2>
                    <div className='projects-image-container'>
                        <img src={fetsyImage} alt='fetsy' className='w-100' />
                        <div className='projects-image-overlay'>
                            <p>Stuff</p>
                            <Button>Learn More</Button>
                        </div>
                    </div>

                    <Button className='bg-primary border-0'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span className='fa-ml-1'>Preview</span>
                    </Button>
                    <Button className='bg-secondary border-0 frontend-button'>
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span className='fa-ml-1'>Frontend Code</span>
                    </Button>
                    <Button className='bg-secondary border-0'>
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span className='fa-ml-1'>Backend Code</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default MyProjects;