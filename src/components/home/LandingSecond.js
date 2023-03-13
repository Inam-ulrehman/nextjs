import { Button } from '@/styles/Wrappers/Buttons'
import { LandingWrapper } from '@/styles/Wrappers/LandingWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1678538863/Inamwebsolutions-nextjs/5_tj2xjb.png'

const LandingSecond = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)
  return (
    <LandingWrapper style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
      <div className='text-box box'>
        <h3 className='first-heading'>Where Creativity Meets Technology</h3>
        <h4 className='second-heading'>
          Contact us today to learn more about our services and how we can help
          you succeed online.
        </h4>
        <p>
          Whether you need a simple website to showcase your products or a
          complex e-commerce platform to sell your services, we have the
          expertise to deliver results that exceed your expectations.
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
        <Link href='/contact'>
          <Button shadow outlined>
            Contact us
          </Button>
        </Link>
      </div>
      <div className='image-box box'>
        <Image src={url} width={400} height={400} alt='Home page image'></Image>
      </div>
    </LandingWrapper>
  )
}

export default LandingSecond
