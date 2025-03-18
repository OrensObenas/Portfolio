import React from 'react'
import { getImageUrl } from '../../utils'
import heroImage from "../../../assets/hero/Portfolio_orens.jpg"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container} >
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Orens</h1>
            <p className={styles.description}>I'm full-stack developper using React js and Django.<br/> Reach out if you'd like to learn more !</p>
            <a href="mailto:orensobenas66@gmail.com" className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={heroImage} alt='Hero image of me' className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>

  )
}

export default Hero