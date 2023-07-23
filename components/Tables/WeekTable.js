import React from 'react'
import styles from './weektable.module.css'

const WeekTable = ({ city, lastNumer }) => {
  // Definir las restricciones de circulación por pico y placa para cada ciudad
  const cityRestrictions = {
    Bogotá: {
      1: [1, 2, 3, 4, 5],
      2: [6, 7, 8, 9, 0],
      3: [1, 2, 3, 4, 5],
      4: [6, 7, 8, 9, 0],
      5: [1, 2, 3, 4, 5],
      6: [], // No aplica para Sábado
      7: [], // No aplica para Domingo
    },
    Ibagué: {
      1: [0,1],
      2: [2,3],
      3: [4,5],
      4: [6,7],
      5: [8,9],
      6: [],
      7: [],
    },
    Medellín: {
      1: [7,1],
      2: [3,0],
      3: [4,6],
      4: [5,9],
      5: [8,2],
      6: [],
      7: [],
    },
    Cali: {
      1: [1,2],
      2: [3,4],
      3: [5,6],
      4: [7,8],
      5: [9,0],
      6: [],
      7: [],
    }
  };

  // Obtener las restricciones para la ciudad actual
  const restrictions = cityRestrictions[city] || {}

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Día de la semana</th>
          <th>Restricciones de pico y placa</th>
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map((day, index) => {
          const dayRestrictions = restrictions[index+1] || []
          const isRestricted = dayRestrictions.includes(parseFloat(lastNumer))
          return(
            <tr className={isRestricted ? styles.restricted : ''} key={index}>
              <td>{day}</td>
              <td>
              {restrictions[index + 1] && restrictions[index + 1].length > 0
                ? `Restringido para placas terminadas en ${restrictions[index + 1].join('-')}`
                : 'No Aplica'}
            </td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default WeekTable;
