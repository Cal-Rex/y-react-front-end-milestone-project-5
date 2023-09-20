import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import styles from '../../styles/Form.module.css'
import btnStyles from '../../styles/Button.module.css'
import axios from 'axios'
import { useSetCurrentUser } from '../../contexts/CurrentUserContext'
import { useRedirect } from '../../hooks/useRedirect'

const LogInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn');

    const [logInData, setLogInData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const history = useHistory()

    const { username, password } = logInData;

    const handleChange = (event) => {
        setLogInData({
            ...logInData,
            [event.target.name]: event.target.value,
        })
        console.log(logInData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            const {data} = await axios.post('/dj-rest-auth/login/', logInData)
            setCurrentUser(data.user)
            history.goBack();
        } catch (err) {
            console.log(err)
            setErrors(err.response?.data)
        }
    }

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
                                onChange={handleChange} />
                        </Form.Group>

                        {errors.password?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
                        <Form.Group controlId="password">
                            <Form.Label className='d-none'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                className={styles.Fields}
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={btnStyles.Btn} activeClassName={styles.BtnActive}>
                            Log In
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
                        Create Account
                    </Link>
                </Col>
                <Col xs={{ span: 3 }} md={{ span: 2 }} className={styles.Right}>
                    <Link to="/password_recovery">
                        Forgot password?
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default LogInForm