import React from 'react'
import styles from "./About.module.css"
import aboutImage from "../../../assets/about/aboutImage.png"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"
import uilcon from "../../../assets/about/uiIcon.png"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={aboutImage} 
                alt='Me sitting with a laptop'
                className={styles.aboutImage}
            />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={cursorIcon} alt='My cursor Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend developper</h3>
                    <p>
                        I'm a frontend developer with experience in build responsive and optimized sites
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={serverIcon} alt='My server Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Backend developper</h3>
                    <p>
                        I have experience developing fast and optimized back-end system and APIs
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={uilcon} alt='My cursor Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Data cleaning and analyse</h3>
                    <p>
                        I'm able to clean data, treat and making graph to found realiship between here
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
