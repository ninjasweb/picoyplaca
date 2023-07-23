import Image from 'next/image'
import styles from './contact.module.css'
import WhatsappIcon from '@/assets/whatsapp.svg'
import Emoji from '@/assets/happy.svg'
import Link from 'next/link'

const Contacto = () => {
  return ( 
    <div className={styles.page}>
      <div className={styles.content}>
        <Image className={styles.emoji} src={Emoji} width={120} height={120} alt='emoji'/>
        <h2>¿Estás interesado en pautar con nosotros?</h2>
        <p>Llega a miles de personas con anuncion dinámicos.</p>
        <Link target='_blank' href="https://wa.me/573123776619">
          <div className={styles.whatsapp}>
            <Image src={WhatsappIcon} width={30} height={30} alt='Whatsapp'/>
            <p>Contactar por Whatsapp</p>
          </div>
        </Link>
      </div>
    </div>
   )
}
 
export default Contacto