import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Section = ({ headerInfo, appContent }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='h1-title text-center' id={headerInfo.id}>{headerInfo.title}</h1>

                </Col>
            </Row>
            {appContent}
        </Container>
    )
}

export default Section