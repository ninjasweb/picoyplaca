import MainButton from '../Buttons/MainButton'
import styles from './header.module.css'

const Header = () => {
  return ( 
    <header className={styles.header}>
      <div className={styles.content}>
        <p>picoyplaca.autos</p>
        <MainButton>¿Cómo funciona el Pico y placa?</MainButton>
      </div>
    </header>
   )
}
 
export default Header