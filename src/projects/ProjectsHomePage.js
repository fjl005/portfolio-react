import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import fetsyImage from '../img/fetsyImage.png'

const ProjectsHomePage = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>My Projects (Summary)</h1>
                    <p>
                        To see in full detail, please check out{' '}
                        <Link to='/projects' className='anchor-lightblue'>
                            My Projects Page
                        </Link>
                        .
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2 className='text-center'>Fetsy Shop Online (MERN Stack)</h2>
                    <img alt='Fetsy Shop Online' src={fetsyImage} width='100%' />
                    <div className='d-flex w-100 justify-content-between'>
                        <Button>Preview</Button>
                        <Button>Frontend Code</Button>
                        <Button>Backend Code</Button>
                        <Button>Learn More</Button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ProjectsHomePage