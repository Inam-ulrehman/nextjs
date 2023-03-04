import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1677933229/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_asog8v.gif'

const LandingThird = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)
  return (
    <Wrapper style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
      <div className='text-box box'>
        <h1>Website and Software Designing Company</h1>
        <h2>Best website Designing company you can think of !!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio
          ad obcaecati numquam similique modi.
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
    h1 {
      font-size: var(--medium);
      color: var(--primary-5);
      font-weight: 800;
    }
    h2 {
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
    h1,
    h2,
    p,
    a {
      margin-left: 0;
    }
  }
`
export default LandingThird
