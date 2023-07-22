import styles from './main.module.css'

const MainButton = ({children}) => {
  return ( 
    <button title={children} className={styles.button}>
      {children}
    </button>
   )
}
 
export default MainButton