import React from 'react'
import { getImageUrl } from '../../utilis'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}> 
            <h2 className={styles.text}>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}alt="Email icon"/>
                <a href="bhavikagandotra66@gmail.com">bhavikagandotra66@gmail.com</a>
            </li>
        </ul>
      
    </footer>
  )
}

export default Contact
