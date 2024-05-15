import technologyIcons from '../img/technologyIcons.png';
import { Container, Row, Col } from 'reactstrap';
import frontend from '../img/frontend.png';
import backend from '../img/backend.png';
import skillsBackground from '../img/skillsBackground.png';


const MySkills = () => {
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h1 className='h1-title text-center' id='skills'>My Skills</h1>
                </Col>

                <Col xs='12' style={{
                    backgroundImage: `url(${skillsBackground}`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                }}>
                    <p><strong className='strong-lightblue'>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Responsive Web Design, Cloudinary.</p>
                    <p><strong className='strong-lightblue'>Backend:</strong> Node.JS, Express, MongoDB (NoSQL), Passport, Session. </p>
                    <p><strong className='strong-lightblue'>General:</strong> REST API, Version Control (Git/Github), Witty One-Liners.</p>

                    <img
                        src={technologyIcons}
                        style={{ width: '20rem' }}
                        alt='frontend and backend technology icons learned'
                    />

                </Col>
            </Row>
        </Container>
    )
}

export default MySkills;