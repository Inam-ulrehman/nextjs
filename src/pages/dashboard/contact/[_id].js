import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const SingleContact = () => {
  const router = useRouter()
  const { _id } = router.query

  return (
    <>
      <Head>
        <title>Single Contact</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <div>SingleContact</div>
    </>
  )
}

export default SingleContact
