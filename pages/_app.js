import '../styles/globals.css'
import Layout from "../components/Layout"
import ProductState from '../context/ProductState';



function MyApp({ Component, pageProps }) {
  

  return (<>
  <ProductState>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ProductState>
  </>)
}
// helloos

export default MyApp;
