import './globals.css'
import { Inter, Quicksand } from 'next/font/google'
import icon1 from "../public/icons/logo192.png"


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${quicksand.variable}`}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
