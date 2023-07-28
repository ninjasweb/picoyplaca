import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
import WhatsappIcon from '@/assets/whatsapp.svg'
import MailIcon from '@/assets/mail.svg'
import { cities } from '@/data/cities'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <div className={styles.menu}>
          {cities.map((item, index)=>{
            return(
              <Link key={index} href={`/ciudades/${item.slug}`}><p>Pico y Placa en {item.name}</p></Link>
            )
          })}
        </div>
        <div className={styles.social}>
          <Link href="/contacto">
            <Image src={WhatsappIcon} width={35} height={35} alt='whatsapp'/>
          </Link>
          <Link href="/contacto">
            <Image src={MailIcon} width={40} height={40} alt='correo electrónico'/>
          </Link>
        </div>
      </div>
      <p>Todos los derechos reservados. | Powered by: <a href='https://ninjasweb.com' target='_blank'>Ninjasweb</a></p>
      <div className={styles.bottom}>
        <Link href={'/contacto'}>¿Quieres anunciarte aquí?</Link>
        <Link href="/politica-de-cookies">Política de Cookies</Link>
        <Link href="/politica-de-privacidad">Política de Privacidad</Link>
      </div>
    </footer>
  )
}
 
export default Footer