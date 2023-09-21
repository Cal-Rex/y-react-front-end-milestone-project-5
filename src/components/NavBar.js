import React from 'react'
import { Container, Dropdown, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import styles from '../styles/NavBar.module.css'
import NavLogo from '../assets/y-no-canvas-alpha.webp'
import Avatar from './Avatar'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from 'axios'
import { useSetQuery } from '../contexts/SearchContext'
import { useHistory, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import dropStyles from '../styles/Dropdown.module.css'
import { useLoadStatus } from '../contexts/LoadContext'
import Asset from '../components/Asset'
import { removeTokenTimestamp } from '../utils/Utils'


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const contextloadStatus = useLoadStatus();
    const history = useHistory();
    const setQuery = useSetQuery();

    const profileRedirect = () => {
        history.push(`/profiles/${currentUser?.profile_id}/`)
    }

    const editProfileRedirect = () => {
        history.push(`/profiles/${currentUser?.profile_id}/edit`)
    }

    const likedRedirect = () => {
        history.push(`/posts/liked`)
    }

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    const authenticatedMenu = (
        <>
            <div className={`${styles.Username}`}>{currentUser?.username}</div>
            <Dropdown>
                <Dropdown.Toggle className={`${dropStyles.DropdownContainer}`}>
                    <Avatar
                        src={currentUser?.profile_image}
                        height={45}
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu align="right" className={dropStyles.DropdownMenu}>
                    <Dropdown.Item className={dropStyles.DropdownItem} onClick={profileRedirect}>Profile</Dropdown.Item>
                    <Dropdown.Item className={dropStyles.DropdownItem} onClick={likedRedirect}>Liked Posts</Dropdown.Item>
                    <Dropdown.Item className={dropStyles.DropdownItem} onClick={editProfileRedirect}>Edit Profile</Dropdown.Item>
                    <Dropdown.Item className={dropStyles.DropdownItem} onClick={handleLogOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className={`mr-sm-2 ${styles.SearchBar}`}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </Form>
                    <Nav className={`ml-auto`}>
                        {contextloadStatus 
                            ? (currentUser ? authenticatedMenu : unauthenticatedMenu)
                            : <Asset loader />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar