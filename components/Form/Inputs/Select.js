import styles from './select.module.css'
import { cities } from '@/data/cities'

const Select = ({setCity}) => {
  const handleChange = (e) => {
    const selectedCity = e.target.value
    setCity(selectedCity)
  }
  return (
    <>
      <select id="city" className={styles.select} onChange={handleChange}>
        <option value="bogota">Selecciona una ciudad</option>
        {cities.map((city, index)=>{
          return (
            <option key={index} value={city.slug}>
              {city.name}
            </option>
          )
        })}
      </select>
      <label htmlFor='city' className={styles.label}>Ciudad actual o que visitas</label>
    </>
    
   )
}
 
export default Select