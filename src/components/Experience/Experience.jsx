import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import styles from "./Experience.module.css"
import html from "../../../assets/skills/html.png"
import js from "../../../assets/skills/First_js.png"
import css from "../../../assets/skills/css.png"
import react from "../../../assets/skills/react.png"
import django from "../../../assets/skills/First_django.png"
import mysql from "../../../assets/skills/First_mysql.png"
import docker from "../../../assets/skills/First_docker.png"
import git from "../../../assets/skills/First_git.png"
import github from "../../../assets/skills/First_github.png"

const Experience = () => {

    let my_Skill = [
        {
          "title": "HTML",
          "imageSrc": html
        },
        {
          "title": "JS",
          "imageSrc":js
        },
        {
          "title": "CSS",
          "imageSrc": css
        },
        {
          "title": "React",
          "imageSrc": react
        },
        {
          "title": "Django",
          "imageSrc": django
        },
        {
          "title": "Mysql",
          "imageSrc": mysql
        },
        {
          "title": "Docker",
          "imageSrc": docker
        },
        {
          "title": "Git",
          "imageSrc": git
        },
        {
          "title": "Github",
          "imageSrc": github
        }
    ];

  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content} >
            <div className={styles.skills}>
                {
                    my_Skill.map((skills, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skills.imageSrc} alt={skills.title}/>
                            </div>
                            <p>{skills.title}</p>
                        </div>
                    })
                }
            </div>
{/*             <ul className={styles.history}>
                {
                    history.map((historyItem,id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img 
                                src={historyItem.imageSrc} 
                                alt={historyItem.organisation} 
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>
                                    {`${historyItem.role}, ${historyItem.organisation}`}
                                </h3>
                                <p>
                                    {`${historyItem.startDate}, ${historyItem.endDate}`}
                                </p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    } )
                }
            </ul> */}
        </div>
    </section>
  )
}

export default Experience
