import PostHead from '../../components/PostHead'
import posts from '../../data/posts'

export function getServerSideProps({ params }) {
  const { slug } = params
  const post = posts.find(p => p.slug === slug)

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }) {
  return <div>
    <PostHead {...posts} />
    <h1>{post.title}</h1>
    <p>{post.subtitle}</p>
  </div>
}
