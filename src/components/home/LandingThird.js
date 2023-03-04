import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1677958689/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_3_erurs4.gif'

const LandingThird = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)
  return (
    <Wrapper style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
      <div className='text-box box'>
        <h4> Your Ultimate Destination for Exceptional Website </h4>
        <h5>
          we are committed to ensuring that you are completely satisfied with
          the final product.
        </h5>
        <p>
          We understand that every business is different, which is why we take
          the time to get to know your brand, your goals, and your audience
          before we start the design process.
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
    h4 {
      font-size: var(--medium);
      color: var(--primary-5);
      font-weight: 800;
    }
    h5 {
      font-weight: 700;
      color: var(--primary-8);
      font-size: 2.44rem;
    }
    p {
    }
    .btn {
      transition: var(--transition);

      :hover {
        margin-top: 0px;
      }
    }
    h1,
    h2,
    p,
    a {
      margin-left: 0;
    }
  }
`
export default LandingThird
