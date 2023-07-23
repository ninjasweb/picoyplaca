import React, { useState } from 'react'
import styles from './input.module.css'

const InputMono = ({ setLetters, setNumbers }) => {
  const [inputLetters, setInputLetters] = useState('')
  const [inputNumbers, setInputNumbers] = useState('')
  const [lettersError, setLettersError] = useState(false)
  const [numbersError, setNumbersError] = useState(false)

  const handleLettersChange = (event) => {
    const value = event.target.value.toUpperCase().slice(0, 3)
    setInputLetters(value)
    setLetters(value)
    validateInput(value, inputNumbers, setLettersError, setNumbersError)
  };

  const handleNumbersChange = (event) => {
    const value = event.target.value.toUpperCase().slice(0, 3)
    setInputNumbers(value)
    setNumbers(value)
    validateInput(inputLetters, value, setLettersError, setNumbersError)
  };

  const validateInput = (letters, numbers, setLettersError, setNumbersError) => {
    const lettersError = !/^[A-Z]{0,3}$/.test(letters)
    const numbersError = !/^[0-9]{0,3}$/.test(numbers)
    setLettersError(lettersError)
    setNumbersError(numbersError)
  };

  return (
    <div className={styles.main}>
      <h2>INGRESA TU PLACA</h2>
      <div className={styles.inputs}>
        {/* Letras */}
        <div className={`${styles.row} ${lettersError && styles.errorBorder}`}>
          <input
            placeholder='ABC'
            value={inputLetters}
            onChange={handleLettersChange}
            className={`${styles.input} ${lettersError && styles.errorBorder}`}
            type="text"
            maxLength={3}
            id="letters"
          />
          <label htmlFor='letters'>Ingresa las letras</label>
          {lettersError && <p className={styles.error}>Ingresa solo letras (máximo 3).</p>}
        </div>
        {/* Números */}
        <div className={`${styles.row} ${numbersError && styles.errorBorder}`}>
          <input
            placeholder='123'
            value={inputNumbers}
            onChange={handleNumbersChange}
            className={`${styles.input} ${numbersError && styles.errorBorder}`}
            type="text"
            maxLength={3}
            id="numbers"
          />
          <label htmlFor='numbers'>Ingresa los números</label>
          {numbersError && <p className={styles.error}>Ingresa solo números (máximo 3).</p>}
        </div>
      </div>
    </div>
  )
}

export default InputMono
