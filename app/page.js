'use client'
import Plate from '@/components/Plate/Plate'
import styles from './page.module.css'
import InputMono from '@/components/Form/Inputs/InputMono'
import { useState } from 'react'
import Select from '@/components/Form/Inputs/Select'
import useCurrentDay from '@/hooks/useCurrentDay'
import useCurrentDate from '@/hooks/useCurrentDate'
import Image from 'next/image'
import useCurrentDayIcon from '@/hooks/useCurrentDayIcon'
import successIcon from '@/assets/success.svg'
import alertIcon from '@/assets/alert.svg'

export default function Home() {
  const [letters, setLetters] = useState('ABC')
  const [numbers, setNumbers] = useState('123')
  const [city, setCity] = useState('Bogotá D.C')
  const currentDay = useCurrentDay()
  const currentDate = useCurrentDate()
  const currentIcon = useCurrentDayIcon()
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Pico y placa hoy: {currentDay}</h1>
        <div className={styles.badge}>
          {currentDay === 'Sábado' || currentDay === 'Domingo'  ? 
            <div className={styles.success}>
              <Image style={{marginRight: '10px'}} src={successIcon} width={30} height={30} alt='success'/> No Aplica hoy
            </div> : 
            <div className={styles.alert}>
              <Image style={{marginRight: '10px'}} src={alertIcon} width={30} height={30} alt='alert'/> Si Aplica hoy
            </div>
          }
        </div>
        <div className={styles.date}>
          <Image className={styles.icon} src={currentIcon} width={40} height={40} alt=''/> 
          <h2>{currentDate}</h2>
        </div>
      </div>
      <div className={styles.content}>
        <InputMono setLetters={setLetters} setNumbers={setNumbers}/>
        <Select setCity={setCity}/>
        <Plate letters={letters} numbers={numbers} city={city}/>
        <h3>Pico y placa para la ciudad de {city}</h3>
      </div>
    </main>
  )
}
