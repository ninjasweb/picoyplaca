import Link from 'next/link'
import MainButton from '../Buttons/MainButton'
import styles from './header.module.css'

const Header = () => {
  return ( 
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <p>picoyplaca.autos</p>
        </Link>
        <Link href="/pico-y-placa-que-es">
          <MainButton>¿Cómo funciona el Pico y Placa?</MainButton>
        </Link>
      </div>
    </header>
   )
}
 
export default Header