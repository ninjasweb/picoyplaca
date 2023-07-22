import styles from './select.module.css'

const Select = ({setCity}) => {
  const cities = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Ibagué'
  ]
  const handleChange = (e) => {
    const selectedCity = e.target.value
    setCity(selectedCity)
  }
  return ( 
    <select className={styles.select} onChange={handleChange}>
      <option value="">Seleccione una ciudad</option>
      {cities.map((city, index)=>{
        return (
          <option key={index} value={city}>
            {city}
          </option>
        )
      })}
    </select>
   )
}
 
export default Select