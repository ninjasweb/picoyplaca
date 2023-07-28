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
import Badge from '@/components/badge'
import HorizontalBanner from '@/components/Ads/HorizontalBanner'
import WeekTable from '@/components/Tables/WeekTable'
import Times from '@/components/Times'

export default function Home() {
  const [letters, setLetters] = useState('ABC')
  const [numbers, setNumbers] = useState('123')
  const [city, setCity] = useState('Bogotá')
  const currentDay = useCurrentDay()
  const currentDate = useCurrentDate()
  const currentIcon = useCurrentDayIcon()
  const lastNumer = numbers[numbers.length -1]
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Pico y placa hoy: {currentDay}</h1>
        <Badge/>
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
        <Times city={city}/>
        <WeekTable lastNumer={lastNumer} city={city}/>
      </div>
      {/* <HorizontalBanner/> */}
    </main>
  )
}
