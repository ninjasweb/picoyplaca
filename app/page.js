'use client'

import Plate from '@/components/Plate/Plate'
import styles from './page.module.css'
import InputMono from '@/components/Form/Inputs/InputMono'
import { useState } from 'react'

export default function Home() {
  const [letters, setLetters] = useState('ABC')
  const [numbers, setNumbers] = useState('123')
  const [city, setCity] = useState('Bogotá')
  return (
    <main className={styles.main}>
      <InputMono setLetters={setLetters} setNumbers={setNumbers} setCity={setCity} />
      <Plate letters={letters} numbers={numbers} city={city}/>
    </main>
  )
}
