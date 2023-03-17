import DashboardLayout from '@/components/dashboard/dashboard-layout'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Request</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <div>Contact</div>
    </>
  )
}

Contact.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default Contact
