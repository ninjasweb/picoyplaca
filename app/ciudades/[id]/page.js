'use client'
import styles from './page.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Badge from '@/components/badge';
import WeekTable from '@/components/Tables/WeekTable';
import Times from '@/components/Times';
import Faqs from '@/components/Faqs';
import { cities } from '@/data/cities';
import TaxiTable from '@/components/Tables/TaxiTable';

const City = ({ params }) => {
  const router = useRouter()
  const cityData = cities.find((city) => city.slug === params.id)
  const isValidCity = !!cityData
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
        <h1>Pico y placa hoy en {cityData.name}</h1>
        <Badge/>
        <h2>Pico y Placa Hoy en {cityData.name}: Restricciones y Horarios para Carros Particulares</h2>
        <p style={{marginTop: '1rem'}}>Si estás conduciendo un carro particular en la ciudad de {cityData.name}, es esencial que estés al tanto de las restricciones de tráfico conocidas como <b>Pico y Placa</b>. Estas regulaciones buscan mejorar la movilidad y reducir la congestión vehicular en la ciudad. A continuación, te proporcionamos toda la información que necesitas para evitar contratiempos y cumplir con las normativas vigentes.</p>
        <h2>Pico y placa para la ciudad de {cityData.name}</h2>
        <Times city={cityData.name}/>
        <WeekTable city={cityData.name}/>
        <TaxiTable city={cityData.name}/>
        <Faqs cityName={cityData.name}/>
      </div>
    </div>
    
  );
};

export default City