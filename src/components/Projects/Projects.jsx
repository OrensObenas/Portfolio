import React from 'react'
import projects from "../../data/projects.json"
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'
import obeisity from '../../../assets/projects/Obeisity.png'
import chatapp_new from '../../../assets/projects/Chatapp_new.png'
import gallery from "../../../assets/projects/Galery.png"
import rapido from "../../../assets/projects/Rapido.png"

const Projects = () => {
  
  let ForSee = [
    {
      "title": "Prediction of Obesity",
      "imageSrc": obeisity,
      "description": "Application based on a machine learning model capable of predicting whether a person is obese or not.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://github.com/OrensObenas/Coding_week"
    },
    {
      "title": "Chatapp",
      "imageSrc": chatapp_new,
      "description": "Instant web chat application that ensures optimal security for its users.",
      "skills": ["React", "Express", "Node", "Sass"],
      "demo": "https://www.example.com",
      "source": "https://github.com/OrensObenas/chatApp"
    },
    {
      "title": "Gallery Management",
      "imageSrc":gallery,
      "description": "Web gallery management application that allows images to be categorized with multiple attributes.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Taxi Course Management",
      "imageSrc": rapido,
      "description": "Web-based course management application that allows a company to manage all the activities.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    }
];

  return (
    <section className={styles.container} id='projets'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                ForSee.map((project, id) => {
                    return <ProjectCard key={id} project={project} />
                })
            }
        </div>
    </section>
  )
}

export default Projects
