import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

/* Component will be the active component [current component in the UI] */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
