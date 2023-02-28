import './globals.css'

export const metadata = {
  title: '🔥 Benjamin Yambot -🔗 LinkTree',
  description: '🚀NextJS | 🍃TailWindCss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-t from-fuchsia-500 via-red-600 to-orange-400 text-white'>{children}</body>
    </html>
  )
}
