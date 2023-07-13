import Head from 'next/head'
import Link from 'next/link';

const posts = [
  { title: 'The state of Crypto 2023', excerpt: 'It\'s been a tough year for crypto investors' },
  { title: 'Happy consensus', excerpt: 'Good things come to those who wait. But it\'s been a long long wait!' }
]

export default function Home() {
  return (
    <div className="container mx-auto px-2 sm:px-10 mb-8">
      <Head>
        <title>Bloggerz Home page | Welcome to Bloggerz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map(post =>
          <div key={post.title}>
            {post.title}
            {post.excerpt}
          </div>
        )}
      </div>
    </div>
  );
}