import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from '@/src/hooks/useCart';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body className={inter.className}>{children}</body>
      </CartContextProvider>
    </html>
  )
}