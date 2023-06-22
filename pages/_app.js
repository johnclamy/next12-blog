import Navbar from '../components/Navbar.'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}