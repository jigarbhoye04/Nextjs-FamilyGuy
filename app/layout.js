import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Family Guy',
  description: 'NEXTJS LEARNING!',
  icon: '/StewieGriffin.webp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}




/**
 * Root layout component for the Family Guy app.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered root layout.
 */




