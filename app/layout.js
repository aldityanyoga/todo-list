// app/layout.js
export const metadata = {
  title: 'Todo List App',
  description: 'Aplikasi Todo List dengan Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
