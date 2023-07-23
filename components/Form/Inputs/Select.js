import styles from './select.module.css'

const Select = ({setCity}) => {
  const cities = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Ibagué'
  ]
  const handleChange = (e) => {
    const selectedCity = e.target.value
    setCity(selectedCity)
  }
  return (
    <>
      <select id="city" className={styles.select} onChange={handleChange}>
        <option value="">Selecciona una ciudad</option>
        {cities.map((city, index)=>{
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