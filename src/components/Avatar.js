
import styles from "../styles/Avatar.module.css";

import useClickAwayToggle from "../hooks/useClickAwayToggle";


const Avatar = (props) => {
    const { src, height = 45, message } = props;
    const { show, setShow, ref } = useClickAwayToggle();

    return (
        <div>
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
        </div>
    )
}

export default Avatar;