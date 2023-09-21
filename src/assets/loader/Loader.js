// Animated loading spinner with page brand.
import React from 'react'
import styles from '../../styles/Loader.module.css'
import YLoader from '../../assets/y-big-canvas-white.webp'

const Loader = () => {
  return (
    <div className={styles.Prev}>
        <img src={YLoader} alt="loading content!" className={styles.Loader}/>
    </div>
  )
}

export default Loader