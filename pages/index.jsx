import Head from 'next/head'
import Link from 'next/link'
import Widget from '../components/Widget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <div>
        <Link href="/about-us" passHref>
          <a>About Us</a>
        </Link>
        <Link href="/contact-us" passHref>
          <a>Contact Us</a>
        </Link>
      </div>
      <div>
        <Widget pageName="index" />
      </div>
    </>
  );
}