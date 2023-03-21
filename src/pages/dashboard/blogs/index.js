import DashboardLayout from '@/components/dashboard/dashboard-layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
    <>
      <Head>
        <title>List Of Blogs</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>

      <div>
        <div className='heading'>
          <Link href={'/dashboard/blogs/post'} className='btn'>
            new blog
          </Link>
        </div>
      </div>
    </>
  )
}

Blogs.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Blogs
