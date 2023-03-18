import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allContactsThunk,
  deleteContactThunk,
  deleteManyContactsThunk,
  getStateValues,
} from '@/features/contacts/contactsSlice'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBack2Line } from 'react-icons/ri'
import Link from 'next/link'
import { formatDate } from '@/utils/helper'
import {
  showDeleteAllWarning,
  showDeleteWarning,
} from '@/features/websitecontent/websitecontentSlice'
import DeleteWarning from '../warnings/deleteWarning'
import DeleteAllWarning from '../warnings/DeleteAllWarning'

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
  // =======deleteMany  =======
  const handleSelectAll = () => {
    if (contacts.list.length === contacts.deleteMany.length) {
      dispatch(getStateValues({ name: 'deleteMany', value: [] }))
      return
    }
    dispatch(getStateValues({ name: 'deleteMany', value: contacts.list }))
  }
  const handleSelectOne = (_id) => {
    if (contacts.deleteMany.find((item) => item._id === _id)) {
      dispatch(
        getStateValues({
          name: 'deleteMany',
          value: contacts.deleteMany.filter((item) => item._id !== _id),
        })
      )
      return
    }
    const result = contacts.list.find((item) => item._id === _id)
    const newValue = [...contacts.deleteMany, result]
    dispatch(getStateValues({ name: 'deleteMany', value: newValue }))
  }

  const handleDeleteMany = () => {
    dispatch(showDeleteAllWarning())
  }
  // =======deleteMany =======

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
      {websitecontent.isDeleteAllWarning && (
        <DeleteAllWarning
          action={() => dispatch(deleteManyContactsThunk(contacts.deleteMany))}
        ></DeleteAllWarning>
      )}
      {/* show delete all button */}
      <div className='delete-all-button'>
        {contacts.deleteMany.length > 0 && (
          <div className='delete-all-button'>
            <button className='btn' onClick={handleDeleteMany}>
              Delete Selected
            </button>
          </div>
        )}
      </div>
      <table>
        <caption>Contact Table</caption>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                checked={contacts.deleteMany.length === contacts.list.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <input
                    type='checkbox'
                    checked={
                      contacts.deleteMany.find(
                        (items) => items._id === item._id
                      )
                        ? true
                        : false
                    }
                    onChange={() => handleSelectOne(item._id)}
                  />
                </td>
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
