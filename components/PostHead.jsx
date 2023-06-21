import Head from 'next/head'

export default function PostHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.subtitle} />

      {/* open-graph meta */}
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.subtitle} />
      <meta property='og:image' content={props.image} />

      {/* twitter card meta */}
      <meta name='twitter:card' content='summary' />
      <meta name='twiiter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta name='twitter:image' content={props.image} />
    </Head>
  )
}