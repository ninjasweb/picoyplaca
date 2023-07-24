import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
import WhatsappIcon from '@/assets/whatsapp.svg'
import MailIcon from '@/assets/mail.svg'

const Footer = () => {
  const menuItems = [
    {
      url: 'bogota',
      city: 'Bogotá',
    },
    {
      url: 'ibague',
      city: 'Ibagué'
    },
    {
      url: 'medellin',
      city: 'Medellín'
    },
    {
      url: 'cali',
      city: 'Cali'
    },
    {
      url: 'armenia',
      city: 'Armenia'
    }
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <div className={styles.menu}>
          {menuItems.map((item, index)=>{
            return(
              <Link key={index} href={`/ciudades/${item.url}`}><p>Pico y Placa en {item.city}</p></Link>
            )
          })}
        </div>
        <div className={styles.social}>
          <Image src={WhatsappIcon} width={35} height={35} alt='whatsapp'/>
          <Image src={MailIcon} width={40} height={40} alt='correo electrónico'/>
        </div>
      </div>
      <p>Todos los derechos reservados. | Powered by: <a href='https://ninjasweb.com' target='_blank'>Ninjasweb</a></p>
      <Link href={'/contacto'}>¿Quieres anunciarte aquí?</Link>
    </footer>
  )
}
 
export default Footer