import Message from "../../components/layouts/Message/Message"
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import styles from "./Project.module.css"
import Container from "../../components/layouts/Container"
import LinkButton from "../../components/layouts/LinkButton/LinkButton"
import ProjectCard from "../../components/project/ProjectCard"


function Projects(){
  const [projects, setProjects] = useState([])
  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http:localhost:5000/projects",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then( response => response.json())
      .then(data => {
        setProjects(data)
      })
      .catch(error => {
        console.log(error)
      })


  },[])

  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/> 
      </div>
      {message && <Message msg={message} type="success"/>}
      <Container customClass = "start">
        <p>Projetos...</p>

      </Container>
    </div>
  )
}

export default Projects