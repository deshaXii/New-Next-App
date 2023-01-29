import './globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />  
      <body>
        <div className="App">
          {children}
        </div>
      </body>
    </html>
  )
}
