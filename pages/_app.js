import { useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import Navbar from '../components/Navbar.'
import themes from '../styles/themes'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => setTheme(
    theme === 'dark' ? 'light' : 'dark'
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        width: '100%',
        minHeight: '100vh',
        ...themes[theme]
      }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}