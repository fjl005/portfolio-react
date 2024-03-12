import { useState, useRef } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef(null);

    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const formFields = [
        { id: 'from_name', label: 'Name', type: 'text' },
        { id: 'reply_to', label: 'Email', type: 'text' },
        { id: 'message', label: 'Message', type: 'textarea', rows: 8 }
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Need to set up email validation somehow.
    const handleSubmit = (event) => {
        event.preventDefault();
        const { from_name, reply_to, message } = formData;
        if (!from_name || !reply_to || !message) {
            alert('You must fill out all fields.');
        } else {
            // Email validation
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reply_to);
            if (!isValidEmail) {
                alert('Please enter a valid email address.')
                return;
            }

            alert('Form submitted!');
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
        }
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
                {formFields.map(field => (
                    <FormGroup key={field.id}>
                        <Row>
                            <Col xs='3' sm='2' className='text-end align-self-center p-0'>
                                <Label htmlFor={field.id} className='mb-0'>
                                    {field.label}
                                </Label>
                            </Col>
                            <Col xs='9' sm='8'>
                                <Input
                                    id={field.id}
                                    name={field.id}
                                    type={field.type}
                                    value={formData[field.id]}
                                    onChange={handleChange}
                                    rows={field.rows}
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                ))}

                <Row>
                    <Col xs='3' sm='2'></Col>
                    <Col xs='9' sm='8' className='submit-button pr-0'>
                        <Button className='bg-primary border-0' type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ContactMe;