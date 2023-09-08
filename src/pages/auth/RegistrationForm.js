import React, { useState } from 'react'
import Link from 'react-router-dom/Link'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../../styles/RegistrationForm.module.css'
import btnStyles from '../../styles/Button.module.css'

const RegistrationForm = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        display_name:'',
        email: '',
        password1: '',
        password2: '',
    });

    const {
        username,
        display_name,
        email,
        password1,
        password2
    } = registrationData;

    const handleEmail = (event) => {
        setRegistrationData({
            ...registrationData,
            email: event.target.value,
        });
        console.log(registrationData)
    }

    const handleName = (event) => {
        setRegistrationData({
            ...registrationData,
            username: event.target.value,
            display_name: event.target.value,
        });
        console.log(registrationData)
    }

    const handleChange = (event) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value,
        })
        console.log(registrationData)
    }

    return (
        <Container fluid>
            
            <Row>
                <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>

                    <Form className={styles.Form}>
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

                        <Form.Group className="d-none" controlId="displayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="DisplayName"
                                className={styles.Fields}
                                value={display_name}
                                onChange={handleChange}/>
                        </Form.Group>

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

                        <Button variant="primary" type="submit" className={btnStyles.Btn}>
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
            <Row className={styles.AltOptions}>
                <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 4 }}>
                    <Link to="/login">
                        Log in
                    </Link>
                </Col>
                <Col xs={{ span: 3}} md={{ span: 2 }} className={styles.Right}>
                    <Link to="/password_recovery">
                        Forgot password?
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default RegistrationForm