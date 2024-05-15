import React from 'react';
import { Row, Col } from 'reactstrap';
import Journey from './Journey';
import Skills from './Skills';
import Timeline from './Timeline';

const AppContent = () => {
    return (
        <>
            <Row>
                <Col>
                    <Skills />
                    <Journey />
                    <h4 className='text-center'>Below is a timeline of my professional and educational background.</h4>
                    <Timeline />
                </Col>
            </Row>
        </>
    )
}

export default AppContent