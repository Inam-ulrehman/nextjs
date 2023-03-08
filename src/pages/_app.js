import 'normalize.css'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/store'
import Layout from '@/components/layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </Provider>
  )
}
