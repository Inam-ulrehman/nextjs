import List from '@/components/contact/List'
import Pagination from '@/components/contact/Pagination'
import Search from '@/components/contact/Search'
import DashboardLayout from '@/components/dashboard/dashboard-layout'
import { allContactsThunk } from '@/features/contacts/contactsSlice'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Contact = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.contacts)
  useEffect(() => {
    dispatch(allContactsThunk())
  }, [])

  if (isLoading) {
    return (
      <div className='title'>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Contact Request</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>
      <Wrapper>
        <Search />
        {/* <List  /> */}
        <Pagination />
      </Wrapper>
    </>
  )
}

Contact.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

const Wrapper = styled.div``
export default Contact
