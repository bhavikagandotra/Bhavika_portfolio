import React from 'react'
import skills from"../../data/skills.json";
import {getImageUrl} from '../../utilis';
import styles from"./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container}id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill,id)=> {
              return<div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p> {skill.title}</p>
        </div> 

            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience
