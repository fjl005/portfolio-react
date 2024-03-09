import { Col, Container, Row } from 'reactstrap';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from './Timeline';
import MySkills from '../about/MySkills';
import MyJourney from '../about/MyJourney';

const AboutMe = () => {
    return (
        <Container className='about-me-background'>
            <Row>
                <Col>
                    <MySkills />
                    <MyJourney />
                    <p>Below is a timeline of my professional and educational background.</p>
                    <Timeline />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;