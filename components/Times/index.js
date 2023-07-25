import styles from './times.module.css'
import {schedules} from '@/data/schedules'

const Times = ({city}) => {
  const citySchedules = schedules[city] || {}
  return ( 
    <div className={styles.times}>
      <h3>Horarios:<br></br> <span>{citySchedules}</span></h3>
    </div>
   )
}
 
export default Times