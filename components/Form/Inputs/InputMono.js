import styles from './input.module.css'

const InputMono = ({setLetters, setNumbers}) => {
  return (
    <div className={styles.main}>
      <h2>INGRESA TU PLACA</h2>
      <div className={styles.inputs}>
        {/* Letras */}
        <div className={styles.row}>
          <input
            placeholder='ABC'
            onChange={(e)=>setLetters(e.target.value.toUpperCase().slice(0, 3))} 
            className={styles.input} type="text" maxLength={3} id="letters" />
          <label htmlFor='letters'>Ingresa las letras</label>
        </div>
        {/* Números */}
        <div className={styles.row}>
          <input
            placeholder='123'
            onChange={(e)=>setNumbers(e.target.value.toUpperCase().slice(0, 3))} 
            className={styles.input} type="text" maxLength={3} id="numbers" />
          <label htmlFor='numbers'>Ingresa los números</label>
        </div>
      </div>
    </div>
   )
}
 
export default InputMono