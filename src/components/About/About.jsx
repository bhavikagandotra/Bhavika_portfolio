import React from 'react'
import { getImageUrl } from '../../utilis'
import styles from "./About.module.css";



const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}> About</h2>
    <div className={styles.content}>  
        <img src={ getImageUrl("about/aboutImage.png")} alt="Me"
        className={styles.aboutImage}/>
        <ul className={styles.aboutItems}> 
            <li className={styles.aboutItem}> 
                <img src={ getImageUrl("about/cursorIcon.png")} alt="cursor"/>

                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p> I'm Frontend Developer with experience in building responsive websites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}> 
                <img src={ getImageUrl("about/serverIcon.png")} alt="server"/>

                <div className={styles.aboutItemText}>
                    <h3>Python  Developer</h3>
                    <p> I have learnt Python and language and have build projects using it.</p>
                </div>
            </li>
            <li  className={styles.aboutItem}> 
                <img src={ getImageUrl("about/cursorIcon.png")} alt="cursor"/>

                <div className={styles.aboutItemText}>
                    <h3>SQL Developer</h3>
                    <p> I have knowledge of Mysql and can manage Database.</p>
                </div>
            </li>
        </ul>
    </div>
   </section>
  )
}

export default About
