import {
  FeatureSection,
  Landing,
  LandingSecond,
  LandingThird,
  ServicesSection,
} from '@/components/home'
import ContactSection from '@/components/home/ContactSection'
import { websiteContent } from '@/utils/data'
import { googleBusinessSocialLinksAttach } from '@/utils/scripts'
import Head from 'next/head'
import Script from 'next/script'
import styled from 'styled-components'
const {
  author,
  description,
  keywords,
  ogImage,
  ogSiteName,
  ogTitle,
  ogUrl,
  title,
} = websiteContent.homepage
export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href={`${websiteContent.seo.websiteName}/`} />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />

        <meta name='Author' content={author} />
        <meta name='og:site_name' content={ogSiteName} />
        <meta name='og:title' content={ogTitle} />
        <meta name='og:url' content={ogUrl} />
        <meta name='og:image' content={ogImage} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_CA' />
        <meta name='og:description' content={description} />
      </Head>

      <Wrapper>
        <Landing />
        <ServicesSection />
        <LandingSecond />
        <FeatureSection />
        <LandingThird />
        <ContactSection />
        {/* Google script to add social media */}
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={googleBusinessSocialLinksAttach()}
          key='google-jsonld'
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``
