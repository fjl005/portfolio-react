import { useState, useRef } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef(null);

    const [personName, setPersonName] = useState('');
    const [emailInfo, setEmailInfo] = useState('');
    const [messageBody, setMessageBody] = useState('');

    // Need to set up email validation somehow.

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('person: ', personName);
        console.log('message: ', messageBody);
        console.log('email: ', emailInfo);
        if (!personName || !messageBody || !emailInfo) {
            alert('You must fill out all fields.');
        } else {
            // Uncomment this code once live. Don't want to use up my 200 monthly emails.
            // emailjs
            //     .sendForm(
            //         process.env.REACT_APP_SERVICE_ID,
            //         process.env.REACT_APP_TEMPLATE_ID,
            //         form.current,
            //         { publicKey: process.env.REACT_APP_PUBLIC_KEY, }
            //     )
            //     .then(
            //         () => {
            //             alert('Form submitted!');
            //         },
            //         (error) => {
            //             alert('Sorry, there was an error in submitting your form.');
            //             console.log('FAILED...', error);
            //         },
            //     );
            alert('Form submitted!');

        }
        // setPersonName('');
        // setMessageBody('');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center pt-5' id='contactMe'>Contact Me</h1>
                    <p>Thank you for reviewing my portfolio. I'm enthusiastic about contributing to innovative projects and am eager to join a dynamic team as a full-time developer. If you're interested in discussing potential opportunities or have any questions, please feel free to reach out using the form below. I look forward to the possibility of collaborating with you!</p>
                </Col>
            </Row>
            <Form innerRef={form} onSubmit={handleSubmit}>
                <FormGroup>
                    <Row>
                        <Col xs='2' className='text-end align-self-center p-0'>
                            <Label htmlFor='from_name'>Name</Label>
                        </Col>
                        <Col xs='8'>
                            <Input
                                id='from_name'
                                name='from_name'
                                type='text'
                                value={personName}
                                onChange={(event) => setPersonName(event.target.value)}
                            />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col xs='2' className='text-end align-self-center p-0'>
                            <Label htmlFor='reply_to'>Email</Label>
                        </Col>
                        <Col xs='8'>
                            <Input
                                id='reply_to'
                                name='reply_to'
                                type='text'
                                value={emailInfo}
                                onChange={(event) => setEmailInfo(event.target.value)}
                            />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col xs='2' className='text-end align-self-center p-0'>
                            <Label htmlFor='message'>Message</Label>
                        </Col>
                        <Col xs='8'>
                            <Input
                                id='message'
                                name='message'
                                type='textarea'
                                rows='8'
                                value={messageBody}
                                onChange={(event) => setMessageBody(event.target.value)}
                            />
                        </Col>
                    </Row>
                </FormGroup>

                <Row className='justify-content-center'>
                    <Col xs='1'>
                        <Button className='bg-primary border-0' type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ContactMe;