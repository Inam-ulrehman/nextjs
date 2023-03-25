import { formatDate } from '@/utils/helper'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const defaultImage =
  'https://res.cloudinary.com/inam6530/image/upload/v1679415017/Inamwebsolutions-nextjs/website_blogs_zlhiwz.svg'
const initialState = {
  images: [],
}
const BlogDesign = ({ blogs }) => {
  const [state, setState] = useState(initialState)
  const {
    image,
    heading,
    description,
    blogHeading,
    blogDescription,
    author,
    createdAt,
  } = blogs
  useEffect(() => {
    setState({ ...state, images: image })
  }, [image])
  return (
    <Wrapper>
      <div className='title-description'>
        <span className='title'>{heading}</span>
        <span className='description'>{description}</span>
      </div>
      <div className='image-container'>
        <Image
          width={600}
          height={340}
          alt={heading}
          src={
            state.images.length === 0
              ? defaultImage
              : state.images[0]?.secure_url
          }
        ></Image>
      </div>
      <div className='body-container'>
        <div className='name-time'>
          <div className='name'>
            <span>Written By :</span>
            <span> {!author ? 'inam' : author}</span>
          </div>
          <div className='time'>
            <span>Posted On :</span>{' '}
            <span>
              {createdAt.length > 0
                ? formatDate(createdAt)
                : formatDate(new Date())}
            </span>
          </div>
        </div>
        <div className='body-heading-description'>
          <div className='body-heading'>{blogHeading}</div>
          <div
            className='description'
            dangerouslySetInnerHTML={{ __html: blogDescription }}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* max-width: 600px; */
  .title-description {
    span {
      display: block;
    }
    .title {
      text-align: start;
      font-size: 2rem;
      font-weight: 650;
      text-transform: capitalize;
      border-bottom: 2px solid var(--grey-4);
      width: fit-content;
    }
    .description {
      :first-letter {
        text-transform: capitalize;
      }
    }
  }
  /* image */
  .image-container {
    /* display: grid;
    place-items: center; */
    img {
      width: 100%;
      height: auto;
      padding: 1rem 0;
    }
  }
  /* body */
  .name-time {
    .name {
      span:nth-child(2) {
        text-transform: uppercase;
        font-weight: 500;
        border-bottom: 2px solid var(--grey-7);
        margin-left: 1rem;
      }
    }
    .time {
      span:nth-child(2) {
        text-transform: uppercase;
        margin-left: 1rem;
        border-bottom: 2px solid var(--grey-7);
        font-weight: 500;
      }
    }
  }
  .body-heading {
    font-size: 1.8rem;
    font-weight: 650;
    text-transform: capitalize;
    border-bottom: 2px solid var(--grey-4);
    width: fit-content;
    padding: 1rem 0;
  }
  .description {
    p {
      :first-letter {
        text-transform: capitalize;
      }
    }
  }
`
export default BlogDesign
