import styles from './input.module.css'

const InputMono = ({setLetters, setNumbers, setCity}) => {
  return (
    <div>
      <label>INGRESA TU PLACA</label>
      {/* Placa */}
      <div>
        {/* Letras */}
        <input 
          onChange={(e)=>setLetters(e.target.value.toUpperCase().slice(0, 3))} 
          className={styles.input} type="text" maxLength={3} />
          {/* Números */}
        <input 
          onChange={(e)=>setNumbers(e.target.value.toUpperCase().slice(0, 3))} 
          className={styles.input} type="text" maxLength={3} />
      </div>
        <input
          onChange={(e)=>setCity(e.target.value.toUpperCase())} 
          type='text' />
    </div>
   )
}
 
export default InputMono