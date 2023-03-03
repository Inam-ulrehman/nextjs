import dynamic from 'next/dynamic'
import Footer from './footer/Footer'
const ComponentWithNoSSR = dynamic(() => import('./header/Header'), {
  ssr: false,
})
const Layout = ({ children }) => {
  return (
    <>
      <ComponentWithNoSSR />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
