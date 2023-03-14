import FormInput from '@/components/FormInput'
import { customFetch } from '@/utils/axios'
import { websiteContent } from '@/utils/data'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const initialState = {
  email: '',
  password: '',
}
const Login = () => {
  const router = useRouter()
  const [state, setState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if (!state.isMember && !state.name) {
    //   return toast.warning('please enter your name')
    // }
    // if (!state.email) {
    //   return toast.warning('please enter your email')
    // }
    // if (!state.password) {
    //   return toast.warning('please enter your password')
    // }

    // login
    try {
      const result = await customFetch.post('users/login', state)
      console.log(result)
      // router.push('/dashboard')
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
            {!state.isMember && (
              <FormInput
                name={'name'}
                value={state.name}
                onChange={handleChange}
              />
            )}
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
                login
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
