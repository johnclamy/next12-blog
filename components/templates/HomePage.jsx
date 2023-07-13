import PostsComponent from "../organisms/PostsComponent";
import AsideComponent from "../organisms/AsideComponent";

export default function HomePage({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <PostsComponent posts={posts} />
        <AsideComponent />
      </section>
    </div>
  );
}