import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allContactsThunk,
  deleteContactThunk,
  getStateValues,
} from '@/features/contacts/contactsSlice'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBack2Line } from 'react-icons/ri'
import Link from 'next/link'
import { formatDate } from '@/utils/helper'
import { showDeleteWarning } from '@/features/websitecontent/websitecontentSlice'
import DeleteWarning from '../warnings/deleteWarning'

const List = () => {
  const dispatch = useDispatch()
  const { contacts, websitecontent } = useSelector((state) => state)
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

  //====== handle Delete ====
  const handleDelete = (_id) => {
    const name = 'deleteId'
    const value = _id
    dispatch(getStateValues({ name, value }))
    dispatch(showDeleteWarning())
  }

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
      {/*=== delete warning=== */}
      {websitecontent.isDeleteWarning && (
        <DeleteWarning
          action={() => dispatch(deleteContactThunk(contacts.deleteId))}
        />
      )}

      <table>
        <caption>Contact Table</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Subject</td>
            <td>Time</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>
                  <Link
                    className='btn btn-a'
                    href={`/dashboard/contact/${item._id}`}
                  >
                    <FiEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className='btn'
                  >
                    <RiDeleteBack2Line />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* table-layout: fixed; */
`
export default List
