import styles from './ProjectForm.module.css'
import Input from '../form/input/input'
import Select from '../form/input/select/Select'
import SubmitButton from '../form/button/SubmitButton'

import { useEffect, useState } from 'react'



function ProjectForm({handleSubmit, btnText, projectData }){

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(()=> {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch(err => console.log(err))  
  }, [])

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({ ...project, [e.target.name]: e.target.value})
  }

  function handleCategory(e) {
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    }})
  }

  
  return(
    <form onSubmit={submit} className={styles.form}>

      <Input 
        type="text" 
        handleOnChange={handleChange} 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
        value={project.name ? project.name : ''} />
      
      <Input 
        type="number" 
        handleOnChange={handleChange} 
        text="Orçamento" 
        name="budget" 
        placeholder="Insira o orçamento do projeto"
        value={project.budget ? project.budget : ''} />


      <Select 
        name="category_id" 
        handleOnChange={handleCategory} 
        text="Selecione a categoria" 
        options={categories} 
        value={project.category? project.category.id : ''} />

      <SubmitButton text={btnText}></SubmitButton>
    </form>
  )
}

export default ProjectForm;