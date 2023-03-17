import DashboardLayout from '@/components/dashboard/dashboard-layout'
import Head from 'next/head'
import React from 'react'

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile </title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <div>Profile</div>
    </>
  )
}

Profile.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default Profile
