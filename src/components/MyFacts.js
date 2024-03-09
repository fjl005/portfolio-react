import { Container, Row, Col, Button } from 'reactstrap';
import { useState } from 'react';
import { randomFacts } from '../data/randomFactsData';

const MyFacts = () => {
    const [currentFactIdx, setCurrentFactIdx] = useState(0);
    console.log('length: ', randomFacts.length);

    const generateNewFact = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * randomFacts.length);
        } while (randomIndex === currentFactIdx);
        setCurrentFactIdx(randomIndex);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 id='myfacts' className='pt-5 text-center'>Random Facts About Me</h1>
                    <h4>{randomFacts[currentFactIdx]}</h4>
                    <Button onClick={generateNewFact}>New Fact</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFacts