
import NavbarHead from '@/components/Navbar/NavbarHead'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '  Discover Seamless Shipping Solutions 🚢 shippers',
  description: 'Shipping with a Purpose. Your Trusted Global Shipping Partner will take care of everything for you, so you can focus on your business.',
  keywords: 'Affordable Shipping, Fast Delivery, Door-to-Door Shipping, Reliable Shipping Partner,Shipping Solutions and Secure Handling'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} relative`}>
        <NavbarHead/>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
      
    </html>
  )
}
