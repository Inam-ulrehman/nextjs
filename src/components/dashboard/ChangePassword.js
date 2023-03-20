import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../FormInput'

const initialState = {
  password: '',
  confirmPassword: '',
  isLoading: false,
}
const ChangePassword = () => {
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
    <Wrapper>
      <hr />
      <div className='title'>Change your password</div>

      <form className='form' onSubmit={handleSubmit}>
        {/* password */}
        <FormInput
          type='password'
          name='password'
          label='New Password'
          value={state.password}
          onChange={handleChange}
        />
        {/* confirmPassword */}
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm New Password'
          value={state.confirmPassword}
          onChange={handleChange}
        />
        <button
          className='btn btn-block'
          type='submit'
          disabled={state.isLoading}
        >
          Change Password
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
  }
`
export default ChangePassword
