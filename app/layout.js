import './globals.css'

export const metadata = {
  title: 'Umar Farooq | Full-Stack Ruby on Rails Developer',
  description: 'Experienced full-stack developer specializing in Ruby on Rails, React, and modern web technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 antialiased">
        {children}
      </body>
    </html>
  )
}
