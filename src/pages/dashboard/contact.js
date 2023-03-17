import DashboardLayout from '@/components/dashboard/dashboard-layout'
import dbConnect from '@/lib/dbConnect'
import Head from 'next/head'
import React from 'react'
import Contacts from '@/models/Contact'
const Contact = ({ props }) => {
  console.log()
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
export async function getServerSideProps(context) {
  dbConnect()
  const contacts = await Contacts.find({})
  contacts = contacts.toObject()
  return {
    props: { contacts },
  }
}
Contact.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default Contact
