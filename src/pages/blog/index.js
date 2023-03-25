import { BlogDesign } from '@/components/dashboard/blog'
import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/Blog'
import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const imageUrl =
  'https://res.cloudinary.com/inam6530/image/upload/v1679775120/Inamwebsolutions-nextjs/nnzlsqedlgak3awdem5y.png'
const Blogs = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name='description'
          content=' Stay Informed and Up-to-Date with Our Thought-Provoking Blog Posts'
        />
        <link rel='canonical' href={`${websiteContent.seo.websiteName}/blog`} />
      </Head>
      <Wrapper>
        <div className='blog-container'>
          <div className='heading-container'>
            <div className='heading-titles'>
              <h1>Our Comprehensive Blogging Service</h1>
              <h2>
                Stay informed and up-to-date with our thought-provoking blog
                posts
              </h2>
            </div>
            <div className='heading-image'>
              <Image
                src={imageUrl}
                width={400}
                height={400}
                alt={'blog'}
              ></Image>
            </div>
          </div>

          {data.map((item) => {
            return (
              <div className='blog-holder' key={item._id}>
                <BlogDesign blogs={item} />
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Blogs

export async function getStaticProps() {
  await dbConnect()
  const data = await Blog.find()

  return JSON.parse(JSON.stringify({ props: { data } }))
}

// style
const Wrapper = styled.div`
  .heading-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .heading-titles {
    padding: 1rem;

    h1 {
      font-weight: 700;
      margin-left: 0;
      color: var(--primary-8);
      text-transform: capitalize;
    }
    h2 {
      max-width: 700px;
      font-weight: 500;
      font-size: var(--large-text);
      margin-left: 0;
    }
    margin-left: 3rem;
  }
  .heading-image {
    display: grid;
    justify-content: center;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(241, 243, 245, 1) 0%,
      var(--primary-8) 100%
    );
  }
  /* mobile only */
  @media (max-width: 768px) {
    .heading-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .heading {
      h1 {
        text-align: center;
        font-size: x-large;
      }
      img {
        width: 95vw;
        height: auto;
      }
    }
    .heading-titles {
      text-align: center;
      margin-left: 0rem;
    }
    .heading-image {
      background: linear-gradient(
        180deg,
        rgba(241, 243, 245, 1) 0%,
        var(--primary-8) 100%
      );
    }
  }
`
