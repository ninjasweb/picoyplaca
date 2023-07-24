export const metadata = {
  title: `Pico y placa hoy`,
  description: 'Conoce todo sobre el pico y placa en tu ciudad',
}

export default function RootLayout({ children }) {
  return (
    <main>
      <>
        {children}
      </>
    </main>
  )
}