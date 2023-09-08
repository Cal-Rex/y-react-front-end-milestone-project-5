import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import styles from '../styles/NavBar.module.css'
import NavLogo from '../assets/y-no-canvas-alpha.webp'


const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} sticky="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={NavLogo} alt="logo" height="30" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className={`mr-sm-2 ${styles.SearchBar}`} />
                    </Form>
                    <Nav className={`ml-auto`}>
                        {/* placeholder for avatar */}
                        <img src={NavLogo} alt="logo" height="30" />

                        {/* im going to make a desktop version layout for the nav bar
                        but i dont know how yet so i have commented out these components for now
                        and then revisit that structure when i deal with sizing */}

                        <NavLink className={styles.Navlinks} to="/login">
                            Log In
                        </NavLink>
                        <NavLink className={styles.Navlinks} to="/register">
                            Register
                        </NavLink>
                        
                        
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar