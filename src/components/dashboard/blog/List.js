import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allBlogsThunk,
  deleteBlogThunk,
  deleteManyBlogsThunk,
  getStateValues,
} from '@/features/blogs/blogsSlice'

import Link from 'next/link'
import { formatDate } from '@/utils/helper'
import {
  showDeleteAllWarning,
  showDeleteWarning,
} from '@/features/websitecontent/websitecontentSlice'
import { DeleteAllWarning, DeleteWarning } from '../../warnings'
import { Icons } from '@/styles/Icons'

const List = () => {
  const dispatch = useDispatch()
  const { blogs, websitecontent } = useSelector((state) => state)
  const {
    isLoading,
    page,
    limit,
    sort,
    searchHeading,
    searchDescription,
    searchBlogHeading,
    searchBlogDescription,
    refreshData,
    list,
    deleteMany,
  } = blogs

  //====== handle Delete ====
  const handleDelete = (_id) => {
    const name = 'deleteId'
    const value = _id
    dispatch(getStateValues({ name, value }))
    dispatch(showDeleteWarning())
  }
  // =======deleteMany  =======
  const handleSelectAll = () => {
    if (list.length === deleteMany.length) {
      dispatch(getStateValues({ name: 'deleteMany', value: [] }))
      return
    }
    dispatch(getStateValues({ name: 'deleteMany', value: list }))
  }
  const handleSelectOne = (_id) => {
    if (deleteMany.find((item) => item._id === _id)) {
      dispatch(
        getStateValues({
          name: 'deleteMany',
          value: deleteMany.filter((item) => item._id !== _id),
        })
      )
      return
    }
    const result = list.find((item) => item._id === _id)
    const newValue = [...deleteMany, result]
    dispatch(getStateValues({ name: 'deleteMany', value: newValue }))
  }

  const handleDeleteMany = () => {
    dispatch(showDeleteAllWarning())
  }
  // =======deleteMany =======

  useEffect(() => {
    dispatch(allBlogsThunk(blogs))
  }, [
    page,
    limit,
    sort,
    searchHeading,
    searchDescription,
    searchBlogHeading,
    searchBlogDescription,
    refreshData,
  ])

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
          action={() => dispatch(deleteBlogThunk(blogs.deleteId))}
        />
      )}
      {/* ====delete many warning */}
      {websitecontent.isDeleteAllWarning && (
        <DeleteAllWarning
          action={() => dispatch(deleteManyBlogsThunk(blogs.deleteMany))}
        ></DeleteAllWarning>
      )}
      {/* show delete all button */}
      <div className='delete-all-button'>
        {blogs.deleteMany.length > 0 && (
          <div className='delete-all-button'>
            <button className='btn' onClick={handleDeleteMany}>
              Delete Selected
            </button>
          </div>
        )}
      </div>
      <table>
        <caption>Blog Table</caption>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                checked={blogs.deleteMany.length === blogs.list.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>image</th>
            <th className=''>Heading</th>
            <th className='time'>Time</th>
            <th className='action'>Action</th>
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
                      blogs.deleteMany.find((items) => items._id === item._id)
                        ? true
                        : false
                    }
                    onChange={() => handleSelectOne(item._id)}
                  />
                </td>
                <td>image</td>
                <td>{item.heading}</td>

                <td className='time mobile-hide'>
                  {formatDate(item.createdAt)}
                </td>
                <td className='action'>
                  <Link
                    className='btn btn-a'
                    href={`/dashboard/blog/${item._id}`}
                  >
                    {Icons.edit}
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className='btn'
                  >
                    {Icons.delete}
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
  table {
    text-align: center;
  }
  .delete-all-button {
    height: 10px;
  }
  .time {
    max-width: 7rem;
  }
  .action {
    max-width: 4rem;
  }
  .btn-a {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    padding: 5px;
    .mobile-hide {
      display: none;
    }
  }
`
export default List
