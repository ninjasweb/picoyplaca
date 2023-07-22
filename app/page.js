'use client'

import Plate from '@/components/Plate/Plate'
import styles from './page.module.css'
import InputMono from '@/components/Form/Inputs/InputMono'
import { useState } from 'react'
import Select from '@/components/Form/Inputs/Select'
import useCurrentDay from '@/hooks/useCurrentDay'
import useCurrentDate from '@/hooks/useCurrentDate'

export default function Home() {
  const [letters, setLetters] = useState('ABC')
  const [numbers, setNumbers] = useState('123')
  const [city, setCity] = useState('Bogotá')
  const currentDay = useCurrentDay()
  const currentDate = useCurrentDate()
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Pico y placa hoy: {currentDay}</h1>
        <h2>{currentDate}</h2>
      </div>
      <div className={styles.content}>
        <InputMono setLetters={setLetters} setNumbers={setNumbers}/>
        <Select setCity={setCity}/>
        <Plate letters={letters} numbers={numbers} city={city}/>
        <h3>Pico y placa para la ciudad de: {city}</h3>
      </div>
    </main>
  )
}
