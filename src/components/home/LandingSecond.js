import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1677958690/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_yuz7vd.gif'

const LandingSecond = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)
  return (
    <Wrapper style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
      <div className='text-box box'>
        <h3>Where Creativity Meets Technology</h3>
        <h4>
          Contact us today to learn more about our services and how we can help
          you succeed online.
        </h4>
        <p>
          Whether you need a simple website to showcase your products or a
          complex e-commerce platform to sell your services, we have the
          expertise to deliver results that exceed your expectations.
        </p>
        <Link className='btn' href='/contact'>
          Let's Talk
        </Link>
      </div>
      <div className='image-box box'>
        <Image src={url} width={400} height={400} alt='Home page image'></Image>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;

  @media (max-width: 820px) {
    min-height: auto;
    grid-template-columns: 1fr;

    .text-box {
      padding: 1rem;
    }
    .image-box {
      text-align: center;
    }
  }
  @media (max-width: 620px) {
    text-align: left;
    .image-box {
      img {
        width: 350px;
        height: 350px;
      }
    }
  }
  .box {
  }
  .text-box {
    padding-left: 3rem;
    h3 {
      font-size: var(--medium);
      color: var(--primary-5);
      font-weight: 800;
    }
    h4 {
      font-size: 2.44rem;
      font-weight: 700;
      color: var(--primary-8);
    }
    p {
    }
    .btn {
      transition: var(--transition);

      :hover {
        margin-top: 0px;
      }
    }
    h3,
    h4,
    p,
    a {
      margin-left: 0;
    }
  }
`
export default LandingSecond
