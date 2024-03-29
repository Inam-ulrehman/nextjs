import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { websiteContent } from '@/utils/data'
import PortfolioCard from '@/components/cards/PortfolioCard'
import { CldImage } from 'next-cloudinary'
const { title, subtitle, description, image } = websiteContent.portfolios
const Portfolios = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={subtitle} />
        <link
          rel='canonical'
          href={`${websiteContent.seo.websiteName}/portfolios`}
        />
      </Head>
      <Wrapper>
        <div className='heading'>
          <div className='heading-container'>
            <div className='heading-titles'>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <div className='heading-image'>
              <CldImage
                src={image}
                width={720}
                height={720}
                alt={title}
                priority
              ></CldImage>
            </div>
          </div>
          <p className='description'>{description}</p>
        </div>
        <div className='heading-title'>
          <span>PORTFOLIOS</span>
        </div>
        <PortfolioCard />
      </Wrapper>
    </>
  )
}

export default Portfolios

const Wrapper = styled.div`
  .heading {
    img {
    }
    .description {
      padding: 1rem;
      min-width: 90vw;
      margin: 0 auto;
      color: var(--grey-7);
    }
  }
  .heading-container {
    display: grid;
    @media (min-width: 768px) {
      min-height: calc(100vh - 94px);
    }
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
  .heading-container {
    display: grid;
    @media (min-width: 768px) {
      min-height: calc(100vh - 94px);
    }
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
  .list {
    padding-top: 5rem;
  }

  /* desktop only */
  @media (min-width: 768px) {
    /* blog inside class */
    .title-description {
      .description-title {
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
        var(--grey-05) 0%,
        var(--grey-4) 50%,
        var(--grey-5) 100%
      );
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .heading-title {
    font-weight: 700;
    text-align: center;
    padding: 1rem;
    font-size: 40px;
    color: var(--primary-7);
    span {
      border-bottom: 4px solid var(--primary-5);
    }
  }
`
