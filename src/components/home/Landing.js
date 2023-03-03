import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
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
      <div className='image-box box'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--primary-5);
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  .box {
    border: 2px solid var(--grey-1);
  }
  .text-box {
    padding-top: 6rem;
    h1 {
      font-size: var(--medium);
      color: var(--secondary-5) !important;
      font-weight: 800;
    }
    h2 {
      font-weight: 700;
      padding-top: 1rem;
    }
    p {
      padding-top: 2rem;
    }
    .btn {
      background-color: var(--secondary-5);
      color: var(--primary-5);
      margin-top: 2rem;
      transition: var(--transition);
      :hover {
        background-color: var(--secondary-4);
        transform: scale(1.1);
      }
    }
    h1,
    h2,
    p,
    a {
      color: var(--white);
      margin: 0;
      margin-left: 4rem;
    }
  }
`
export default Landing
