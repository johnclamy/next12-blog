import Categories from "./Categories";
import PostWidget from "./PostWidget";

export default function AsideComponent() {
  return (
    <aside className="lg:col-span-4 col-span-1">
      <section className="lg:stricky relative top-8">
        <Categories />
        <PostWidget />
      </section>
    </aside>
  );
}