import React from 'react';
import { getImageUrl } from '../../utilis';
import styles from './ProjectsCard.module.css';

const ProjectsCard = ({ project: { title, imageSrc, description, skills } }) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCard;
