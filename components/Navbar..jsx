import Link from 'next/link'

export default function Navbar() {
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
      </nav>
    </div>
  )
}
