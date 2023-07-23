import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Todos los derechos reservados. | Powered by: <a href='https://ninjasweb.com' target='_blank'>Ninjasweb</a></p>
      <a href="/contacto">¿Quieres anunciarte aquí?</a>
    </footer>
  )
}
 
export default Footer