import Link from 'next/link'

export default function Logo() {
  return (
    <section className='md:float-left block'>
      <Link href='/'>
        <b className='cursor-pointer font-bold text-4xl text-yellow-900 capitalize'>
          bloggerz
        </b>
      </Link>  
    </section>
  )
}