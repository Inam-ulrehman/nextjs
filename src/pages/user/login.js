import FormInput from '@/components/FormInput'
import { customFetch } from '@/utils/axios'
import { websiteContent } from '@/utils/data'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const initialState = {
  name: '',
  email: '',
  password: '',
}
const Login = () => {
  const [state, setState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit request')
    try {
      const response = await customFetch.post('users/register', state)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }
  return (
    <>
      <Head>
        <title>{state.isMember ? 'Login' : 'Register'}</title>
        <meta name='description' content='welcome member' />
        <link rel='canonical' href={`${websiteContent.seo.websiteName}/user`} />
      </Head>
      <Wrapper>
        <div className='image-container'></div>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className='form'>
            {/* name */}

            <FormInput
              name={'name'}
              value={state.name}
              onChange={handleChange}
            />

            {/* email */}
            <FormInput
              name={'email'}
              value={state.email}
              type='email'
              onChange={handleChange}
            />
            {/* password */}
            <FormInput
              name={'password'}
              value={state.password}
              type='password'
              onChange={handleChange}
            />
            <div className='btn-holder'>
              <button className='btn' type='submit'>
                Register
              </button>
              <Link className='btn' href={`/user/forgotpassword`}>
                Forget Password
              </Link>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``
export default Login
