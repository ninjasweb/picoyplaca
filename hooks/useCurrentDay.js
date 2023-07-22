const useCurrentDay = () => {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay()
  const currentDay = daysOfWeek[currentDayIndex]
  return currentDay
}
 
export default useCurrentDay