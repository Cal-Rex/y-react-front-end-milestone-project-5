import React from 'react'
import styles from "../styles/Avatar.module.css";

const Avatar = (props) => {
    const {src, height = 45, message} = props;

return (
    <div>
        <span className={styles.Username}>{message}</span>
        <img
            className={styles.ProfilePic}
            src={src}
            height={height}
            width={height}
            alt="Profile Avatar"
        />
            
    </div>
)
}

export default Avatar;