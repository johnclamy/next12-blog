import Layout from '../components/organisms/Layout';
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}