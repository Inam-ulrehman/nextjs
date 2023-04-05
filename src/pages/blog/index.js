import List from '@/components/blogs/List'
import Pagination from '@/components/blogs/Pagination'
import { customFetch } from '@/utils/axios'
import { websiteContent } from '@/utils/data'
import { CldImage } from 'next-cloudinary'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import useSWRConfig from 'swr'
const src = 'Inamwebsolutions-nextjs/nnzlsqedlgak3awdem5y'

const initialState = {
  page: 1,
  limit: 10,
}

const Blogs = () => {
  const [state, setState] = useState(initialState)
  const { page, limit } = state

  const { data, error, isLoading } = useSWRConfig(
    `/blogs?page=${page}&limit=${limit}`,
    customFetch
  )
  const { data: preloadData } = useSWRConfig(
    `/blogs?page=${page + 1}&limit=${limit}`,
    customFetch
  )
  if (error) {
    return <div className='title'>Error</div>
  }
  return (
    <>
      <Head>
        <title>
          Design Insights: Expert Tips and Latest Trends in Website Design
        </title>
        <meta
          name='description'
          content=' Stay ahead of the curve with our Design Insights blog. Our team of experts shares valuable tips, techniques, and insights on the latest trends in website design.'
        />
        <link rel='canonical' href={`${websiteContent.seo.websiteName}/blog`} />
      </Head>
      <Wrapper>
        <div className='blog-container'>
          <div className='heading-container'>
            <div className='heading-titles'>
              <h1>Our Comprehensive Blogging Service</h1>
              <h2>
                Stay ahead of the curve with our Design Insights blog. Our team
                of experts shares valuable tips, techniques, and insights on the
                latest trends in website design.
              </h2>
            </div>
            <div className='heading-image'>
              <CldImage
                src={src}
                width={720}
                height={720}
                alt={'blog'}
                priority
              ></CldImage>
            </div>
          </div>
          {isLoading ? (
            <div className='title'>
              <h3>Loading...</h3>
              <div className='loading'></div>
            </div>
          ) : (
            <div>
              <List data={data} />
              <div style={{ display: 'none' }}>
                <List data={preloadData} />
              </div>
            </div>
          )}
          {/* pagination */}
          <Pagination
            state={state}
            setState={setState}
            nbHits={data?.data?.nbHits}
          />
        </div>
      </Wrapper>
    </>
  )
}

export default Blogs

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
      font-weight: 400;
      font-size: var(--large-text);
      margin-left: 0;
    }
    margin-left: 3rem;
  }
  .heading-image {
    display: grid;
    height: 100%;
    place-content: center;

    background: linear-gradient(
      90deg,
      var(--grey-05) 0%,
      var(--grey-4) 50%,
      var(--grey-5) 100%
    );
    img {
      width: 100%;
      height: auto;
    }
  }

  /* desktop only */
  @media (min-width: 768px) {
    /* blog inside class */
    .title-description {
      .description-title {
        min-height: 70px;
        display: block;
        border-bottom: none;
        font-size: 20px;
        padding: 0;
      }
    }

    /* body */
    .blog-body {
      display: grid;

      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      width: 93vw;
    }
  }

  /* mobile only */
  @media (max-width: 768px) {
    .heading-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .heading-titles {
      margin-left: 0rem;

      h1 {
        font-size: 2rem;
        text-align: center;
      }
      h1,
      h2 {
        max-width: 90vw;
      }
    }
    .heading-image {
      background: linear-gradient(
        180deg,
        var(--grey-05) 0%,
        var(--grey-4) 50%,
        var(--grey-5) 100%
      );
    }
  }
  /* body */
  .blog-body {
    padding: 1rem;
    margin: 0 auto;
    max-width: 100vw;
  }
`
