import { useContext } from 'react'
import Link from 'next/link'
import themeContext from '../contexts/themeContext'

export default function Navbar() {
  const { toggleTheme, theme } = useContext(themeContext)
  const currentTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25
    }}>
      <div>Bloggersphere</div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about-us'>About Us</Link>
        <Link href='/contact-us'>Contact Us</Link>
        <button onClick={toggleTheme}>
          Set {currentTheme} theme
        </button>
      </nav>
    </div>
  )
}
