import styles from './times.module.css'

const Times = ({city}) => {
  const schedules = {
    Bogotá: '6:00 AM - 9:00 PM',
    Ibagué: '6:00 AM - 9:00 PM',
    Medellín: '5:00 AM - 8:00 PM',
    Cali: '6:00 AM - 8:00 PM',
    Armenia: '7:00 AM - 5:30 PM',
    Bucaramanga: '6:00 AM - 8:00 PM',
  }
  const citySchedules = schedules[city] || {}
  return ( 
    <div className={styles.times}>
      <h3>Horarios: <span>{citySchedules}</span></h3>
    </div>
   )
}
 
export default Times