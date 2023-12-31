import styles from './faqs.module.css'
import {schedules} from '@/data/schedules'

const Faqs = ({city}) => {
  const citySchedules = schedules[city.slug] || {}
  const faqs = [
    {
      question: `¿Cuáles son las restricciones de Pico y Placa para carros particulares en ${city.name}?`,
      answer: `Las restricciones de Pico y Placa para carros particulares en ${city.name} aplican de lunes a viernes. Cada día de la semana, hay un horario específico y restricciones basadas en las placas terminadas en ciertos números.`
    },
    {
      question: `¿Qué horarios debo tener en cuenta para Pico y Placa en ${city.name}`,
      answer: `Los horarios para Pico y Placa en ${city.name} son de ${citySchedules} de lunes a viernes.`
    },
    {
      question: `¿Cuál es la finalidad del Pico y Placa en ${city.name}?`,
      answer: `El objetivo principal del Pico y Placa en ${city.name} es mejorar la movilidad y reducir la congestión vehicular en la ciudad, mediante la regulación de la circulación de carros particulares en días específicos según el último dígito de su placa.`
    },
    {
      question: `¿Qué sucede si conduzco un carro particular durante el Pico y Placa en ${city.name}`,
      answer: `Si conduces un carro particular durante el horario de Pico y Placa en ${city.name} y tu placa está restringida, podrías enfrentar sanciones y multas por incumplir las regulaciones de tráfico. Es importante evitar circular en los días y horarios restringidos para evitar contratiempos.`
    }
  ]
  return ( 
    <div className={styles.faqs}>
      {faqs.map((faq, index)=>{
        return (
          <div key={index} className={styles.single_faq}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        )
      })}
    </div>
   )
}
 
export default Faqs