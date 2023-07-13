import HomePage from "../components/templates/HomePage";

const posts = [
  { title: 'The state of Crypto 2023', excerpt: 'It\'s been a tough year for crypto investors' },
  { title: 'Happy consensus', excerpt: 'Good things come to those who wait. But it\'s been a long long wait!' }
]

export default function Home() {
  return <HomePage posts={posts} />
}
