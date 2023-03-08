import {
  FeatureSection,
  Landing,
  LandingSecond,
  LandingThird,
  ServicesSection,
} from '@/components/home'
import ContactSection from '@/components/home/ContactSection'

import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='/' />
        <link rel='icon' href='/favicon.ico' />
        <title>Business Website Design and Development</title>
        <meta
          name='keywords'
          content='Kitchener, Waterloo, Ontario, Web Design, Website Application Development, Content Management System, Cambridge, Guelph, Hosting, Ecommerce'
        />
        <meta
          name='description'
          content='we offer a range of services to help businesses achieve their online goals, including custom website design, e-commerce solutions, website maintenance, and more.'
        />

        <meta name='Author' content='INAM Web Solutions' />
        <meta name='og:site_name' content='Inam Web Solutions' />
        <meta
          name='og:title'
          content='Business Website Design and Development'
        />
        <meta name='og:url' content='https://www.inamwebsolutions.com' />
        <meta
          name='og:image'
          content='https://res.cloudinary.com/inam6530/image/upload/v1667486202/inamwebsolutions/Inam_n9s4i4.svg'
        />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_CAD' />
        <meta
          name='og:description'
          content='we offer a range of services to help businesses achieve their online goals, including custom website design, e-commerce solutions, website maintenance, and more.'
        />
      </Head>

      <Wrapper>
        <Landing />
        <ServicesSection />
        <LandingSecond />
        <FeatureSection />
        <LandingThird />
        <ContactSection />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``
