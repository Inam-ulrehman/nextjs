import { Icons } from '@/styles/Icons'
import { servicesData } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Services = ({ data }) => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name='description' content='Services page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <div className='heading'>
          <h1>This is services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum animi
            aliquid repellat molestias aut maiores officia dolore ipsam atque,
            nemo nostrum ipsum sapiente provident voluptatum?
          </p>
        </div>
        <div className='body'>
          {data?.map((item, index) => {
            return (
              <div className='body-container card ' key={index}>
                <Link href={`/services/[id]`} as={`/services/${item.path}`}>
                  <div className='body-container-header'>
                    <i style={{ color: `var(--${item.color}-7)` }}>
                      {Icons[item.icon]}
                    </i>
                    <p style={{ color: `var(--${item.color}-7)` }}>
                      {item.title}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Services

export async function getStaticProps() {
  let data = servicesData

  return {
    props: {
      data,
    },
  }
}

// style
const Wrapper = styled.div`
  padding: 1rem;
  .heading {
    display: grid;
    text-align: center;
    p {
      margin: 0 auto;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .body-container {
      position: relative;
      z-index: 0;
      transition: var(--transition);
      :hover {
        cursor: pointer;
        box-shadow: var(--shadow-5);
      }
    }

    .body-container-header {
      text-align: center;
      p {
        font-weight: 700;
        margin-bottom: 0;
      }
    }
  }
`
