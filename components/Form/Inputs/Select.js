import styles from './select.module.css'
import { cities } from '@/data/cities'

const Select = ({setCity}) => {
  const citiesArray = cities.map(city => city.name)
  const handleChange = (e) => {
    const selectedCity = e.target.value
    setCity(selectedCity)
  }
  return (
    <>
      <select id="city" className={styles.select} onChange={handleChange}>
        <option value="Bogotá">Selecciona una ciudad</option>
        {citiesArray.map((city, index)=>{
          return (
            <option key={index} value={city}>
              {city}
            </option>
          )
        })}
      </select>
      <label htmlFor='city' className={styles.label}>Ciudad actual o que visitas</label>
    </>
    
   )
}
 
export default Select