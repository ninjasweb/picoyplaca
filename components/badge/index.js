import successIcon from '@/assets/success.svg'
import alertIcon from '@/assets/alert.svg'
import styles from './badge.module.css'
import Image from 'next/image'
import useCurrentDay from '@/hooks/useCurrentDay'

const Badge = () => {
  const currentDay = useCurrentDay()
  return ( 
    <div className={styles.badge}>
      {currentDay === 'Sábado' || currentDay === 'Domingo'  ? 
        <div className={styles.success}>
            <Image style={{marginRight: '10px'}} src={successIcon} width={30} height={30} alt='success'/> No Aplica hoy
        </div> : 
        <div className={styles.alert}>
            <Image style={{marginRight: '10px'}} src={alertIcon} width={30} height={30} alt='alert'/> Si Aplica hoy
        </div>
          }
    </div>
   )
}
 
export default Badge;