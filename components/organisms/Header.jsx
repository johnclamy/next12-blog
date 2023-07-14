import Logo from '../molecules/Logo';
import CategoryLinks from "../molecules/CategoryLinks";

export default function Header() {
  return (
    <header className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-yellow-500 py-8">
        <Logo />
        <CategoryLinks />
      </div>
    </header>
  );
}