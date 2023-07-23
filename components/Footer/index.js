import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Todos los derechos reservados. | Powered by: <a href='https://ninjasweb.com' target='_blank'>Ninjasweb</a></p>
      <Link href={'/contacto'}>¿Quieres anunciarte aquí?</Link>
    </footer>
  )
}
 
export default Footer