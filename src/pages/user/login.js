import FormInput from '@/components/FormInput'
import { customFetch } from '@/utils/axios'
import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'
const initialState = {
  name: '',
  email: '',
  password: '',
}
const login = () => {
  const [state, setState] = useState(initialState)

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
        <title>Member </title>
        <meta name='description' content='Member register / login' />
      </Head>
      <Wrapper>
        <form onSubmit={handleSubmit} className='form'>
          {/* email */}
          <FormInput
            type={'email'}
            name='email'
            value={state.email}
            onChange={handleChange}
          />
          {/* password */}
          <FormInput
            type={'password'}
            name='password'
            value={state.password}
            onChange={handleChange}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div``
export default login
