import dbConnect from '@/lib/dbConnect'
import Users from '@/models/User'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import * as jose from 'jose'
import DashboardLayout from '@/components/dashboard/dashboard-layout'

const Dashboard = ({ user }) => {
  // console.log(user)
  return (
    <>
      <Head>
        <title>Welcome to your dashboard</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <div>Welcome to your dashboard</div>
    </>
  )
}

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps(context) {
  await dbConnect()
  const jwt = context.req.cookies['token']

  const { payload } = await jose.jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  )
  const user = await Users.findById(
    payload.userId,
    '-password -forgotPasswordId -uuid '
  )
  // console.log(user)
  // const users = result.map((doc) => {
  //   const user = doc.toObject()
  //   user._id = user._id.toString()

  //   return user
  // })
  return JSON.parse(JSON.stringify({ props: { user } }))
}
export default Dashboard
