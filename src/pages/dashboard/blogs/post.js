import BlogDesign from '@/components/dashboard/blog/BlogDesign'
import DashboardLayout from '@/components/dashboard/dashboard-layout'
import FormInput from '@/components/FormInput'
import { getStateValues } from '@/features/blogs/blogsSlice'
import Head from 'next/head'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const PostBlog = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state)
  const { heading, description, image, blogHeading, blogDescription } = blogs

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <>
      <Head>
        <title>Post New Blog</title>
        <meta name='description' content='Your dashboard page.' />
      </Head>

      <Wrapper>
        <div className='input'>
          <form className='form' onSubmit={handleSubmit}>
            {/* image */}
            <FormInput
              value={image}
              name='image'
              important={true}
              onChange={handleChange}
            />
            {/* heading */}
            <FormInput
              value={heading}
              name='heading'
              important={true}
              onChange={handleChange}
            />
            {/* description */}
            <FormInput
              value={description}
              name='description'
              important={true}
              onChange={handleChange}
            />
            {/* blogHeading */}
            <FormInput
              value={blogHeading}
              name='blogHeading'
              label={'Blog Heading'}
              important={true}
              onChange={handleChange}
            />
            {/* blog Description */}
            <div className='description'>
              <label className='form-label'>
                Description <span>*</span>
              </label>
              <textarea
                className='form-input'
                name='blogDescription'
                value={blogDescription}
                onChange={handleChange}
                cols='40'
                rows='10'
              ></textarea>
            </div>
            <button className='btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <div className='blog-design'>
          <BlogDesign blogs={blogs} />
        </div>
      </Wrapper>
    </>
  )
}

PostBlog.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  .form {
    margin: 0;
  }
  .description {
    span {
      color: red;
    }
  }
`
export default PostBlog
