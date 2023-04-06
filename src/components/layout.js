// import dynamic from 'next/dynamic'
import { useBlogs } from '@/features/blogs/swr'
import Footer from './footer/Footer'
import Header from './header/Header'
// const ComponentWithNoSSR = dynamic(() => import('./header/Header'), {
//   ssr: false,
// })
const Layout = ({ children }) => {
  useBlogs({ page: 1, limit: 10 })
  return (
    <>
      {/* <ComponentWithNoSSR /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
