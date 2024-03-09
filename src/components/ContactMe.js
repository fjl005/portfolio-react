import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const ContactMe = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center' id='contactMe' style={{ paddingTop: '3rem' }}>Contact Me</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMe