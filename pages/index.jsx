import { getPosts } from "../lib/graphql";
import HomePage from "../components/templates/HomePage";

export default function Home({ posts }) {
  return <HomePage posts={posts} />
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts }
  }
}
