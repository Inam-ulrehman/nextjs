import { singleContactThunk } from '@/features/contacts/contactsSlice'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const SingleContact = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { _id } = router.query

  useEffect(() => {
    dispatch(singleContactThunk(_id))
  }, [])
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
