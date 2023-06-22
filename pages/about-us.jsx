import Head from 'next/head'
import Link from 'next/link'
import Widget from '../components/Widget'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About this blog</title>
      </Head>
      <header>
        <Widget pageName="about" />
      </header>
      <main>This is the about us page</main>
    </>
  );
}