import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Shop App',
  description: 'A generic Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='layout'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
