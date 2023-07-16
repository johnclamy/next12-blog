import { getPosts } from "../lib/graphql";
import HomePage from "../components/templates/HomePage";

const posts = [
  { title: 'The state of Crypto 2023', excerpt: 'It\'s been a tough year for crypto investors' },
  { title: 'Happy consensus', excerpt: 'Good things come to those who wait. But it\'s been a long long wait!' }
]

export default function Home({ _posts }) {
  console.log('On the home page:', _posts)
  return <HomePage posts={posts} />
}

// Fetch data at build time
export async function getStaticProps() {
  const _posts = (await getPosts()) || []
  return {
    props: { _posts }
  }
}
