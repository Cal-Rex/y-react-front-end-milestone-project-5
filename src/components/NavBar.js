import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from '../styles/NavBar.module.css'
import NavLogo from '../assets/y-no-canvas-alpha.webp'
import Avatar from './Avatar'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from 'axios'


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const authenticatedMenu = (
        <>
            <div className={`${styles.Username}`}>{currentUser?.username}</div>
            <Avatar
                src={currentUser?.profile_image}
                height={45}
            />
        </>
    )
    const unauthenticatedMenu = (
        <>
            <NavLink className={styles.Navlinks} to="/login">
                Log In
            </NavLink>
            <NavLink className={styles.Navlinks} to="/register">
                Register
            </NavLink>
        </>
    )

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
                        {/* <img src={NavLogo} alt="logo" height="30" /> */}

                        {/* im going to make a desktop version layout for the nav bar
                        but i dont know how yet so i have commented out these components for now
                        and then revisit that structure when i deal with sizing */}

                        {currentUser ? authenticatedMenu : unauthenticatedMenu}

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