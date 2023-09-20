import { useState, useRef } from "react";
import styles from "../styles/Avatar.module.css";
import { Button, Overlay, Dropdown } from "react-bootstrap";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from "axios";
import useClickAwayToggle from "../hooks/useClickAwayToggle";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Avatar = (props) => {
    const { src, height = 45, message, profile_id } = props;
    // const [show, setShow] = useState(false);
    const { show, setShow, ref } = useClickAwayToggle();
    const target = useRef(null);
    const setCurrentUser = useSetCurrentUser();
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const profileRedirect = () => {
        history.push(`/profiles/${currentUser?.profile_id}/`)
    }

    const editProfileRedirect = () => {
        history.push(`/profiles/${currentUser?.profile_id}/edit`)
    }

    return (
        <div>

            <Dropdown>
                <Dropdown.Toggle className={`${styles.AvatarContainer}`} id="dropdown-basic">
                    <span className={styles.Username}>{message}</span>
                    <img
                        className={styles.ProfilePic}
                        src={src}
                        height={height}
                        width={height}
                        alt="Profile Avatar"
                        ref={ref}
                        onClick={() => setShow(!show)}
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu align="right" className={styles.AvatarMenu}>
                    <Dropdown.Item onClick={profileRedirect}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={editProfileRedirect}>Edit Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <Overlay target={ref} show={show} placement="bottom-end">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <>
                        <div
                            {...props}
                            style={{
                                backgroundColor: '#00000000',
                                padding: '2px 10px',
                                color: '#fafafa',
                                borderRadius: 3,
                                ...props.style,
                            }}
                        >
                            <Button
                                className={styles.AMButton}
                                onClick={handleLogOut}
                            >
                                Log Out
                            </Button>
                        </div>
                        <div
                            {...props}
                            style={{
                                backgroundColor: '#00000000',
                                padding: '2px 10px',
                                color: '#fafafa',
                                borderRadius: 3,
                                ...props.style,
                            }}
                        >
                            <Link to={`/profiles/${currentUser.profile_id}/`}>
                                <Button
                                    className={styles.AMButton}
                                >
                                    View Profile
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </Overlay> */}

        </div>
    )
}

export default Avatar;