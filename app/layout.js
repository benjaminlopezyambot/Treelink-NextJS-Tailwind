import './globals.css'

export const metadata = {
  title: '🔥 Benjamin Yambot -🔗 LinkTree',
  description: '🚀NextJS | 🍃TailWindCss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 text-white'>{children}</body>
    </html>
  )
}
