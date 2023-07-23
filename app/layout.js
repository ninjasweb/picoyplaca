import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import useCurrentDay from '@/hooks/useCurrentDay'
import useCurrentDate from '@/hooks/useCurrentDate'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const currentDay = useCurrentDay()
const currentDate = useCurrentDate()


export const metadata = {
  title: `Pico y Placa hoy: ${currentDay} ${currentDate}`,
  description: `Conoce los horarios del pico y placa hoy ${currentDay} ${currentDate}`,
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-9Q467GTG01'></Script>
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9Q467GTG01', {cookie_flags: 'SameSite=None;Secure'});
          `
        }}></Script>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
