import useCurrentDate from './useCurrentDate' // Importa el hook useCurrentDate

const dateIcons = {};
for (let day = 1; day <= 31; day++) {
  dateIcons[day] = require(`../assets/calendar/${day}.svg`).default
}

const useCurrentDayIcon = () => {
  const currentDate = useCurrentDate(); // Obtiene la fecha actual del hook useCurrentDate
  const currentDay = Number(currentDate.split(' ')[0]); // Extraer el día de la fecha actual
  const iconFileName = dateIcons[currentDay]; // Obtener el nombre del archivo de icono

  return iconFileName
};

export default useCurrentDayIcon
