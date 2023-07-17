import Link from "next/link";

export default function ReadMoreBtn({ href }) {
  return (
    <Link href={href}>
      <b
        className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-yellow-600 font-medium text-lg rounded-full text-white px-8 py-3 cursor-pointer capitalize"
      >
        continue reading
      </b>
    </Link>
  );
}
