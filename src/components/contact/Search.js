import { getStateValues } from '@/features/contacts/contactsSlice'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const { searchName, searchEmail, searchMobile } = useSelector(
    (state) => state.contacts
  )
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <div>
      {/* name */}
      <div>
        <input
          type='text'
          name='searchName'
          placeholder='Name'
          value={searchName}
          onChange={handleChange}
        />
        <BiSearchAlt2 />
      </div>

      {/* email */}
      <div>
        <input
          type='email'
          name='searchEmail'
          placeholder='Email'
          value={searchEmail}
          onChange={handleChange}
        />
        <BiSearchAlt2 />
      </div>

      {/* Mobile */}
      <div>
        <input
          type='number'
          placeholder='Mobile'
          name='searchMobile'
          value={searchMobile}
          onChange={handleChange}
        />
        <BiSearchAlt2 />
      </div>
    </div>
  )
}

export default Search
