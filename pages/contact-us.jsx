import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";

export default function ContactUS() {
  return (
    <div>
      <Head>
        <title>You can contact us</title>
      </Head>
      <header>
        <Widget pageName="contact" />
      </header>
      <ul>
        <li>Email: jon-doe445@homeworkers-inc.com</li>
        <li>Twitter: @jon-doe445</li>
        <li>Instagram: jon-doe445</li>
      </ul>
    </div>
  );
}
