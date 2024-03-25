import MySkills from "../about/MySkills";
import MyJourney from "../about/MyJourney";
import Timeline from "../about/Timeline";
import { Container, Row, Col } from "reactstrap";
import NavbarApp from "../components/NavbarApp";

const AboutMePage = () => {
    return (
        <>
            <NavbarApp />
            <Container className='about-me-background'>
                <Row>
                    <Col>
                        <h1 className='text-center'>About Me</h1>
                        <MyJourney />
                        <h4 className='text-center'>Below is a timeline of my professional and educational background.</h4>
                        <Timeline />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMePage