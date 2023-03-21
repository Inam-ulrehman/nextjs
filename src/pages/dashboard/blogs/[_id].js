import DashboardLayout from '@/components/dashboard/dashboard-layout'
import Head from 'next/head'
import React from 'react'

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>Single Blog</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <div>SingleBlog</div>
    </>
  )
}

SingleBlog.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default SingleBlog
