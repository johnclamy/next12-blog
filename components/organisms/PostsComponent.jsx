import PostCard from "../molecules/PostCard";

export default function PostsComponent({ posts }) {
  return (
    <article className="lg:col-span-8 col-span-1">
      {posts.map((post) => <PostCard post={post} />)}
    </article>
  );
}