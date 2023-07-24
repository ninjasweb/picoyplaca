'use client'
import styles from './page.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Badge from '@/components/badge';
import WeekTable from '@/components/Tables/WeekTable';

const City = ({ params }) => {
  const router = useRouter()
  const cities = [
    { slug: 'ibague', name: 'Ibagué' },
    { slug: 'bogota', name: 'Bogotá' },
    { slug: 'medellin', name: 'Medellín' },
    { slug: 'cali', name: 'Cali' },
  ]
  const cityData = cities.find((city) => city.slug === params.id)
  const isValidCity = !!cityData

  console.log(cityData)

  useEffect(() => {
    if (!isValidCity) {
      router.push('/')
    }
  }, [isValidCity, router])

  if (!isValidCity) {
    return null
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Pico y placa hoy en: {cityData.name}</h1>
        <Badge/>
        <WeekTable city={cityData.name}/>
      </div>
    </div>
    
  );
};

export default City