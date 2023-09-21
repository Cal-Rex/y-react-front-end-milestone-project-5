import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Footer = () => {
    return (
        <Container fluid className={`${styles.Footer} fixed-bottom`}>
                <Row>
                    <Col className='text-right' xs={{ span: 4 }} md={{ span: 4 }}>
                        <Link to="/posts/trending">
                            <i className={`${styles.Shadow} fa-solid fa-fire-flame-curved fa-2xl`}></i>
                        </Link>
                    </Col>
                    <Col className='text-center' xs={{ span: 4 }} md={{ span: 4 }}>
                        <Link to="/posts/create">
                            <i className={`${styles.Shadow} fa-regular fa-square-plus fa-2xl`}></i>
                        </Link>
                    </Col>
                    <Col className='text-left' xs={{ span: 4 }} md={{ span: 4 }}>
                        <Link to="/profiles">
                            <i className={`${styles.Shadow} fa-solid fa-user-group fa-2xl`}></i>
                        </Link>
                    </Col>
                </Row>

        </Container>
    )
}

export default Footer