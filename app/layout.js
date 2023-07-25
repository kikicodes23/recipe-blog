import './globals.css'
import { Montserrat, Playfair_Display } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const playfair_display = Playfair_Display({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

export const metadata = {
  title: 'Recipe blog',
  description: 'This is a React.js project building a recipe blog page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${playfair_display.variable}`}>{children}</body>
    </html>
  )
}
