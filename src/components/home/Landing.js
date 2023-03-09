import { Button } from '@/styles/Wrappers/Buttons'
import { LandingWrapper } from '@/styles/Wrappers/LandingWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1677958702/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_4_rancro.gif'

const Landing = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)
  return (
    <LandingWrapper style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
      <div className='text-box box'>
        <h1 className='first-heading'>
          Professional Website Designing Services.
        </h1>
        <h2 className='second-heading'>
          we have the expertise and resources to create a website that reflects
          your brand
        </h2>
        <p>
          At our website designing company, we offer professional and customized
          website design services that are tailored to meet the unique needs of
          your business.
        </p>
        <div className='mobile-image'>
          <Image
            src={url}
            width={400}
            height={400}
            alt='Home page image'
            priority
          ></Image>
        </div>
        <Link href='/contact' passHref>
          <Button shadow outlined>
            Lets Talk
          </Button>
        </Link>
      </div>
      <div className='image-box box'>
        <Image
          src={url}
          width={400}
          height={400}
          alt='Home page image'
          priority
        ></Image>
      </div>
    </LandingWrapper>
  )
}

export default Landing
