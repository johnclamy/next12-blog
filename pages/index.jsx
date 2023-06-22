import Head from 'next/head'
import Link from 'next/link'
import Widget from '../components/Widget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <header>
        <Widget pageName="index" />
      </header>
      <main>This is the home page</main>
    </>
  );
}