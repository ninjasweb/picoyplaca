import { taxiRestrictions } from '@/data/taxiRestrictions';
import styles from './weektable.module.css'
import useCurrentDay from '@/hooks/useCurrentDay';

const TaxiTable = ({ city, lastNumer }) => {

  // Obtener las restricciones para la ciudad actual
  const restrictions = taxiRestrictions[city] || {}
  const currentDayName = useCurrentDay()

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Lunes']

  const currentDate = new Date();
  // Función para obtener la cantidad de días en un mes específico
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Día de la semana</th>
          <th>Restricciones de pico y placa: Taxis</th>
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map((day, index) => {
          const dayRestrictions = restrictions[index+1] || []
          const isRestricted = dayRestrictions.includes(parseFloat(lastNumer))

          // Calcular la fecha para cada día de la semana
          const currentDay = currentDate.getDate();
          const currentMonth = currentDate.getMonth();
          const dayToAdd = index - currentDate.getDay() + 1; // Sumar días para obtener el día de la semana correspondiente
          const dateForDay = new Date(currentDate);
          dateForDay.setDate(currentDay + dayToAdd);

          // Verificar si estamos en el mes siguiente
          if (dateForDay.getMonth() !== currentMonth) {
            // Si estamos en el mes siguiente, ajustar la fecha
            const lastDayOfMonth = getDaysInMonth(dateForDay.getFullYear(), currentMonth);
            dateForDay.setDate(lastDayOfMonth);
          }

          const dayNumber = dateForDay.getDate();
          const monthNumber = dateForDay.getMonth() + 1;
          return(
            <tr className={isRestricted ? styles.restricted : ''} key={index}>
              <td><span style={{
                fontWeight: day === currentDayName ? 'bold' : 'normal'
              }}>{day} {dayNumber}/{monthNumber}</span></td>
              <td>
              {restrictions[index + 1] && restrictions[index + 1].length > 0
                ? `Restringido para placas terminadas en ${restrictions[index + 1].join('-')}`
                : <span style={{color: '#aaa'}}>No Aplica</span>}
            </td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default TaxiTable;
