import './globals.css'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        
        <div className="flex flex-1 flex-col">
         
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
