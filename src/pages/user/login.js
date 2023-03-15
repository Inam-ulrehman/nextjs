import FormInput from '@/components/FormInput'
import { customFetch } from '@/utils/axios'
import { setItemInLocalStorage } from '@/utils/localStorage'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  isLoading: '',
}
const Login = () => {
  const [state, setState] = useState(initialState)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (state.isMember) {
      // Login
      try {
        setState({ ...state, isLoading: true })
        const result = await customFetch.post('users/login', state)
        const token = result.data.msg.user.token
        Cookies.set('token', token, { expires: 7 })
        setItemInLocalStorage('user', result.data.msg.user)
        router.push('/dashboard')
        setState({ ...state, isLoading: false })
      } catch (error) {
        setState({ ...state, isLoading: false })
        toast.error(error.response?.data?.msg)
      }
      return
    } else {
      // Register
      setState({ ...state, isLoading: true })
      const result = await customFetch.post('users/register', state)
      const token = result.data.msg.user.token
      Cookies.set('token', token, { expires: 7 })
      setItemInLocalStorage('user', result.data.msg.user)
      router.push('/dashboard')
      setState({ ...state, isLoading: false })
      try {
      } catch (error) {
        setState({ ...state, isLoading: false })
        console.log(error)
      }
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
        <meta name='description' content='Member page' />
      </Head>
      <Wrapper>
        <div className='image-container'></div>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className='form'>
            {/* name  */}
            {!state.isMember && (
              <FormInput
                name={'name'}
                type='text'
                value={state.name}
                onChange={handleChange}
              />
            )}
            {/* email  */}
            <FormInput
              name={'email'}
              type='email'
              value={state.email}
              onChange={handleChange}
            />
            {/* password  */}
            <FormInput
              name={'password'}
              type='password'
              value={state.password}
              onChange={handleChange}
            />
            <div className='btn-container'>
              <button className='btn' type='submit' disabled={state.isLoading}>
                {state.isLoading && <span className='loading-span'></span>}
                {state.isMember ? 'Login' : 'Register'}
              </button>
              <Link className='btn btn-a' href='/user/forgotpassword'>
                Forgot Password
              </Link>
            </div>
            <div className='footer'>
              <span>
                {state.isMember
                  ? 'Are you not a member ?'
                  : 'Are you a member ?'}
              </span>
              <button
                className='btn'
                type='button'
                onClick={() =>
                  setState({ ...state, isMember: !state.isMember })
                }
              >
                {state.isMember ? 'Register' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
`
export default Login
