import React from 'react'
import styles from '../loader/Loader.module.css'
import YLoader from '../../assets/y-big-canvas-white.webp'

const Loader = () => {
  return (
    <div className={styles.Prev}>
        <img src={YLoader} className={styles.Loader}/>
    </div>
  )
}

export default Loader