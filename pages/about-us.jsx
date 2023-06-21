import Head from 'next/head'
import Link from 'next/link'
import Widget from '../components/Widget'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About this blog</title>
      </Head>
      <div>
        <Link href="/" passHref>
          <a>Back to home</a>
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
}