import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Blog <span>Tech</span>
      </h2>
      <p>
        Este projeto foi desenvolvido com as tecnologias: React no front-end e
        Firebase no back-end
      </p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  )
}

export default About
