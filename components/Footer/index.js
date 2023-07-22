import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Todos los derechos reservados. | Powered by: <a style={{color: 'var(--white)'}} href='https://ninjasweb.com' target='_blank'>Ninjasweb</a></p>
    </footer>
  )
}
 
export default Footer