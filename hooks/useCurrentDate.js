// useCurrentDate.js
const useCurrentDate = () => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const formattedDate = `${day} de ${months[monthIndex]} de ${year}`;
  
  return formattedDate;
};

export default useCurrentDate;
