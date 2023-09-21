import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../../styles/Form.module.css';
import btnStyles from '../../styles/Button.module.css';
import axios from 'axios';
import { useRedirect } from '../../hooks/useRedirect';


const RegistrationForm = () => {
    useRedirect('loggedIn');
    const [registrationData, setRegistrationData] = useState({
        username: '',
        display_name:'',
        email: '',
        password1: '',
        password2: '',
    });
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const { username, email, password1, password2 } = registrationData;

    const handleEmail = (event) => {
        setRegistrationData({
            ...registrationData,
            email: event.target.value,
        });
    };

    const handleName = (event) => {
        setRegistrationData({
            ...registrationData,
            username: event.target.value,
            display_name: event.target.value,
        });
    };

    const handleChange = (event) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            await axios.post('/dj-rest-auth/registration/', registrationData);
            history.push('/login');
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Container fluid>
            
            <Row>
                <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>

                    <Form onSubmit={handleSubmit} className={styles.Form}>
                        {errors.username?.map((message, idx) => 
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                className={styles.Fields}
                                value={username}
                                onChange={handleName}/>
                        </Form.Group>
                        
                        {errors.email?.map((message, idx) => 
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
                        <Form.Group controlId="email">
                            <Form.Label className='d-none'>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                className={styles.Fields}
                                value={email}
                                onChange={handleEmail}
                                />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        {errors.password1?.map((message, idx) => 
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
                        <Form.Group controlId="password1">
                            <Form.Label className='d-none'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password1"
                                className={styles.Fields} 
                                value={password1}
                                onChange={handleChange}
                                />
                        </Form.Group>

                        {errors.password2?.map((message, idx) => 
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
                        <Form.Group controlId="password2">
                            <Form.Label className='d-none'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                className={styles.Fields}
                                value={password2}
                                onChange={handleChange}
                                />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={btnStyles.Btn} activeClassName={styles.BtnActive}>
                            Submit
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                        ))}
                    </Form>

                </Col>
            </Row>
            <Row className={styles.AltOptions}>
                <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 4 }}>
                    <Link to="/login">
                        Log in
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationForm