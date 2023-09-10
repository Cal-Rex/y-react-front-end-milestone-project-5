import React from "react";
import styles from "../styles/Asset.module.css";
import Loader from "../assets/loader/Loader";

const Asset = ({ loader, src, message }) => {
    return (
        <div className={styles.Asset}>
            {loader && <Loader/>}
            {src && <img src={src} alt={message} />}
            {message && <p>{message}</p>}
        </div>
    )
}

export default Asset;