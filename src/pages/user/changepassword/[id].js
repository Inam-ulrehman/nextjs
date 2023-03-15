import FormInput from '@/components/FormInput'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const initialState = {
  password: '',
  confirmPassword: '',
  isLoading: false,
}
const ChangePassword = () => {
  const [state, setState] = useState(initialState)
  const router = useRouter()
  const { id } = router.query

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }
  return (
    <>
      <Head>
        <title>Change Password</title>
        <meta name='description' content='Member page' />
      </Head>
      <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
          {/* password */}
          <FormInput
            label='New password'
            type='password'
            value={state.password}
            name='password'
            onChange={handleChange}
          />
          {/* confirm */}
          <FormInput
            label='Confirm New password'
            type='password'
            value={state.password}
            name='password'
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``
export default ChangePassword
