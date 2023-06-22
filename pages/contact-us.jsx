import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";

export default function ContactUS() {
  return (
    <div>
      <Head>
        <title>You can contact us</title>
      </Head>
      <div>
        <Link href="/about-us" passHref>
          <a>About Us</a>
        </Link>
        <Link href="/" passHref>
          <a>Back to home</a>
        </Link>
      </div>
      <ul>
        <li>Email: jon-doe445@homeworkers-inc.com</li>
        <li>Twitter: @jon-doe445</li>
        <li>Instagram: jon-doe445</li>
      </ul>
      <div>
        <Widget pageName="contact" />
      </div>
    </div>
  );
}
