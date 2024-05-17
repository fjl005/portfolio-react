import React from 'react'
import { Col, Row, Button, Container } from 'reactstrap';
import { projectsData } from './projectsData';
import { faMagnifyingGlass, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectTemplate from './ProjectTemplate';
import styles from '../projects.module.scss';

const PageContent = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center'>My Projects</h1>
                </Col>
            </Row>
            <ProjectTemplate />
            {projectsData.map((data) => (
                <Row key={data.title}>
                    <Col className='mb-4'>
                        <h2 className={`mt-3 ${styles['project-title']}`}>{data.title}</h2>
                        <p>
                            {data.description.map((text, idx) => (
                                <span key={idx}>
                                    {text.link ? (
                                        <a
                                            href={text.link}
                                            target='_blank'
                                            className='anchor-lightblue'
                                            rel='noreferrer'
                                        >
                                            {text.text}
                                        </a>
                                    ) : text.text}
                                </span>
                            ))}
                        </p>

                        <div className='text-center'>
                            <img
                                src={data.img}
                                className={styles['project-image']}
                                alt={data.title}
                            />
                        </div>

                        <div className={`my-3 ${styles['projects-buttons-grid']}`}>
                            <a href={data.previewLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-primary border-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <span className={styles['fa-ml-1']}>Preview</span>
                                </Button>
                            </a>
                            <a href={data.frontendLink} target='_blank' rel='noreferrer'>
                                <Button className={`bg-secondary border-0 ${styles['frontend-button']}`}>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                    <span className={styles['fa-ml-1']}>Frontend Code</span>
                                </Button>
                            </a>
                            <a href={data.backendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0'>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                    <span className={styles['fa-ml-1']}>Backend Code</span>
                                </Button>
                            </a>
                        </div>

                        <h3 className={styles['project-concepts']}>General Concepts</h3>
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
        </Container>
    )
};

export default PageContent;