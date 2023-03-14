import dbConnect from '@/lib/dbConnect'
import Users from '@/models/User'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Dashboard = ({ users }) => {
  return (
    <>
      <Head>
        <title>Welcome to your dashboard</title>
        <meta name='description' content='Your dashboard page.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul>
        {users.map((item, index) => {
          return (
            <div key={index}>
              <p>Name: {item.name}</p>
              <Link href='/dashboard/[id]' as={`/dashboard/${item._id}`}>
                <button className='btn view'>View</button>
              </Link>
            </div>
          )
        })}
      </ul>
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  const result = await Users.find({})
  const users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()

    return user
  })

  return JSON.parse(JSON.stringify({ props: { users } }))
}
export default Dashboard
