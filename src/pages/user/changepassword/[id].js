import FormInput from '@/components/FormInput'
import { customFetch } from '@/utils/axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
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
    const { password, confirmPassword } = state
    e.preventDefault()
    if (!password || !confirmPassword) {
      return toast.warning('Please enter your password')
    }
    if (password !== confirmPassword) {
      return toast.error(`Password don't match`)
    }
    if (password.length <= 6) {
      return toast.error(`Minimum 6 character's required`)
    }
    try {
      const response = await customFetch.post(
        '/users/email-link-change-password',
        { id, password }
      )
      toast.success(response.data.msg)
      router.push('/user/login')
    } catch (error) {
      toast.error(error.response.data.msg)
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
            value={state.confirmPassword}
            name='confirmPassword'
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
