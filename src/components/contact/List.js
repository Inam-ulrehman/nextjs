import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allContactsThunk } from '@/features/contacts/contactsSlice'

const List = () => {
  const dispatch = useDispatch()
  const { contacts } = useSelector((state) => state)
  const {
    isLoading,
    page,
    limit,
    sort,
    searchName,
    searchEmail,
    searchMobile,
    refreshData,
    list,
  } = contacts

  useEffect(() => {
    dispatch(allContactsThunk(contacts))
  }, [page, limit, sort, searchName, searchEmail, searchMobile, refreshData])

  if (isLoading) {
    return (
      <div className='title'>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Subject</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.createdAt}</td>
            </tr>
          )
        })}
      </tbody>
    </Wrapper>
  )
}

const Wrapper = styled.table`
  table-layout: fixed;
`
export default List
