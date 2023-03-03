import dbConnect from '@/lib/dbConnect'
import Users from '@/models/Users'
import Link from 'next/link'
import React from 'react'

const Dashboard = ({ users }) => {
  return (
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

  return { props: { users } }
}
export default Dashboard
