import styles from './layout.module.css'

export const metadata = {
  title: '¿Cómo funciona el pico y placa?',
  description: 'Conoce todo sobre el pico y placa en tu ciudad',
}

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}
