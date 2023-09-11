import React from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <Navbar className={styles.Footer} fixed="bottom">
            <Nav className="m-auto">
                <NavLink to="/"> +</NavLink>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
        </Navbar>
    )
}

export default Footer