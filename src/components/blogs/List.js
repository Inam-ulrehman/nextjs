import React from 'react'
import styled from 'styled-components'
import BlogDesignIndex from '../dashboard/blog/BlogDesignIndex'

const List = ({ data }) => {
  return (
    <Wrapper className='blog-body'>
      {data?.data?.result?.map((item) => {
        return (
          <div className='blog-holder' key={item._id}>
            <BlogDesignIndex blogs={item} readMore={true} />
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* desktop only */
  @media (min-width: 768px) {
  }
  /* mobile only */
  @media (max-width: 768px) {
  }
`
export default List
