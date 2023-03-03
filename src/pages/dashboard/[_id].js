import dbConnect from '@/lib/dbConnect'
import Users from '@/models/Users'
import { useRouter } from 'next/router'
import React from 'react'

const SingleUser = (user) => {
  const router = useRouter()
  return (
    <div>
      <p>User Name = {user?.name}</p>
      <p>user Email = {user?.email}</p>
      <button type='button' onClick={() => router.back()}>
        Click here to go back
      </button>
    </div>
  )
}
/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps(context) {
  await dbConnect()
  /* find all the data in our database */
  const result = await Users.findById(context.params)

  if (!result) {
    return {
      notFound: true,
    }
  }
  const user = result.toObject()
  user._id = user._id.toString()

  return { props: user }
}
export default SingleUser
