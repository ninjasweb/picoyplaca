import Image from 'next/image'
import styles from './plate.module.css'
import MinTransporteLogo from '@/assets/mintransporte.png'

const Plate = ({letters, numbers, city}) => {
  return ( 
    <div className={styles.plate}>
      <div className={styles.id}>
        <div>{letters}</div>
        <Image src={MinTransporteLogo} width={30} height={30} alt='Mininisterio de Transporte'/>
        <div>{numbers}</div>
      </div>
      <div className={styles.city}>
        <p>{city}</p>
      </div>
      <div className={styles.marks}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
   )
}
 
export default Plate