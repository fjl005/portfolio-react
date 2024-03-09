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
                        <div className='text-center'>
                            <img
                                src={data.img}
                                style={{ width: '75%' }}
                                alt={data.title}
                            />
                        </div>
                        <div className='text-center my-3'>
                            <a href={data.previewLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-primary border-0'>Preview</Button>
                            </a>
                            <a href={data.frontendLink} target='_blank' rel='noreferrer'>
                                <Button className='bg-secondary border-0 mx-3'>Frontend Code</Button>
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
                    <p>Collaborative effort with another developer.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyProjects