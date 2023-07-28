import styles from './layout.module.css'

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}
