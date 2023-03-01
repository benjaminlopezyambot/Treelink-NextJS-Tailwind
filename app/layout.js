import './globals.css'

export const metadata = {
  title: '🔥 Benjamin Yambot -🔗 LinkTree',
  description: '🚀NextJS | 🍃TailWindCss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white'>{children}</body>
    </html>
  )
}
