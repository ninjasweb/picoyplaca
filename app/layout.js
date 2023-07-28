import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Pico y Placa hoy`,
  description: `Conoce los horarios y restricciones para hoy.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id='ga' async src='https://www.googletagmanager.com/gtag/js?id=G-9Q467GTG01'></Script>
        <Script id="ga_html" dangerouslySetInnerHTML={{
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
