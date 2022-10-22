import styles from './Home.module.css'
import savings from '../../assets/img.svg'
import LinkButton from '../../components/layouts/LinkButton/LinkButton'
function Home(){
  return(
      <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Começe a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img src={savings} alt="costs"/>
      </section>
  )
}

export default Home