import { useState, useRef } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FORM_FIELDS, formInitial } from './formData';

const ContactForm = () => {
    const form = useRef(null);
    const [formData, setFormData] = useState(formInitial);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { from_name, reply_to, message } = formData;
        if (!from_name || !reply_to || !message) {
            alert('You must fill out all fields.');
        } else {
            setIsSubmitting(true);
            // Email validation
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reply_to);
            if (!isValidEmail) {
                alert('Please enter a valid email address.')
                return;
            }

            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    { publicKey: process.env.REACT_APP_PUBLIC_KEY, }
                )
                .then(() => {
                    alert('Form submitted!');
                    setSubmitted(true);
                }, (error) => {
                    alert('Sorry, there was an error in submitting your form.');
                    console.log('FAILED...', error);
                },)
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return (

        <Form innerRef={form} onSubmit={handleSubmit}>
            {FORM_FIELDS.map(field => (
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
                    {submitted ? (
                        <Button className='bg-success border-0' disabled={true}>
                            Submitted
                        </Button>
                    ) : (
                        <Button
                            className='bg-primary border-0'
                            type='submit'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} spin size='lg' />
                                    <span style={{ marginLeft: '0.5rem' }}>Submitting...</span>
                                </>
                            ) : 'Submit'}
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default ContactForm;