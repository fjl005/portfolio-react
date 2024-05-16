import React, { useState } from 'react';
import { projectsData } from './projectsData';
import fetsyImage from '../../../img/fetsyImage.png';
import { Col, Row } from 'reactstrap';
import ProjectOverlay from './ProjectOverlay';


const ProjectTemplate = () => {
    const techs = ['React', 'Node.JS', 'Express', 'MongoDB', 'JavaScript', 'CSS', 'HTML',];
    const [isHover, setIsHover] = useState(false);
    return (
        <Row>
            <Col xs='1' md='2' lg='3' />
            <Col xs='10' md='8' lg='6'
                style={{ color: 'black', backgroundColor: '#F5F5F5', borderRadius: '1rem', boxShadow: '0 0 1rem #ffffff', position: 'relative' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isHover && (
                    <ProjectOverlay />
                )}
                <h2 className='text-center mt-2'>Fetsy Shop Online</h2>
                <img src={fetsyImage} alt='Fetsy Shop Online' className='w-100' />
                <div>
                    <Row>
                        {techs.map(tech => (
                            <Col key={tech} xs='6' md='4' className='text-center'>
                                <span style={{ backgroundColor: '#D3D3D3', width: '80%', borderRadius: '0.5rem', padding: '0.5rem', margin: '0.5rem 0', display: 'inline-block' }}>
                                    {tech}
                                </span>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
            <Col xs='1' md='2' lg='3' />
        </Row>
    )
}

export default ProjectTemplate