import Link from 'next/link';

const categories = [
  { name: 'DeFi Development', slug: 'defi-development' },
  { name: 'Polygon', slug: 'polygon'}
]

export default function CategoryLinks() {
  return (
    <nav className='hidden md:float-left md:contents'>
      {categories.map(cat =>
        <Link key={cat.slug} href={`/category/${cat.slug}`}>
          <b className="md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer">
            {cat.name}
          </b>
        </Link>  
      )}
    </nav>
  )
}