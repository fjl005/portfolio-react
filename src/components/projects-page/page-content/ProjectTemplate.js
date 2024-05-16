import React from 'react';
import { projectsData } from './projectsData';
import fetsyImage from '../../../img/fetsyImage.png';
import { Col, Row } from 'reactstrap';


const ProjectTemplate = () => {
    const techs = ['React', 'Node.JS', 'Express', 'MongoDB', 'JavaScript', 'CSS', 'HTML',]
    return (
        <Row>
            <Col md='0' lg='2' />
            <Col md='12' lg='8'
                style={{ color: 'black', backgroundColor: '#F5F5F5', borderRadius: '1rem' }}>
                <h2 className='text-center'>Fetsy Shop Online</h2>
                <img src={fetsyImage} alt='Fetsy Shop Online' className='w-100' />
                <div>
                    <Row>
                        {techs.map(tech => (
                            <Col key={tech} xs='6' md='4' lg='3' className='text-center'>
                                <span style={{ backgroundColor: '#D3D3D3', width: '80%', borderRadius: '0.5rem', padding: '0.5rem', margin: '0.5rem 0', display: 'inline-block' }}>
                                    {tech}
                                </span>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
            <Col md='0' lg='2' />

        </Row>
    )
}

export default ProjectTemplate