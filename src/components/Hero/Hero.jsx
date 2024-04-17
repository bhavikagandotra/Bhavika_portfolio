import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utilis'

const Hero = () => {
  return (
  <section className={styles.container}>
      <div className={styles.content}>  
        <h1 className={styles.title}> Hi, I'm Bhavika  </h1>
        <p className={styles.description}>Highly motivated and Passionate Front-end Developer who possess extensive knowledge of HTML, CSS, JavaScript and ReactJS, which allows me to create visually appealing and interactive user interfaces. With a keen eye for detail and a focus on user experience</p>
        <a href="mailto:bhavikagandotra66@gmail.com" className={styles.contactBtn}>Contact Me</a> 
      </div>
      <img src={getImageUrl("hero/heroImage.png")}  alt="Her" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
  </section>
  )
}
export default Hero
