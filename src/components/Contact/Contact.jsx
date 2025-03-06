import React from 'react'
import emailIcon from '../../../assets/contact/emailIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'
import linkedinIcon from '../../../assets/contact/linkedinIcon.png'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src= {emailIcon} alt='Email Icon' />
                <a href="mailto:orensobenas66@gmail.com">orensobenas66@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src= {linkedinIcon} alt='linkedin Icon' />
                <a href="www.linkedin.com/in/obenas-orens-6426662a1">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src= {githubIcon} alt='github Icon'/>
                <a href="https://github.com/OrensObenas">github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
