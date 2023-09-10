import { useState, useRef } from "react";
import styles from "../styles/Avatar.module.css";
import { Button, Overlay } from "react-bootstrap";
import { useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from "axios";


const Avatar = (props) => {
    const { src, height = 45, message } = props;
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const setCurrentUser = useSetCurrentUser();

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <span className={styles.Username}>{message}</span>
            <img
                className={styles.ProfilePic}
                src={src}
                height={height}
                width={height}
                alt="Profile Avatar"
                ref={target}
                onClick={() => setShow(!show)}
            />
            <Overlay target={target.current} show={show} placement="bottom-end">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
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
                )}
            </Overlay>

        </div>
    )
}

export default Avatar;