import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionIntro,
  sectionTech,
  sectionCourse,
  sectionModule,
  sectionAbout,
  sectionTeam,
  sectionReview,
  sectionFaq
}: LandingPageProps) => (
  <>
    <SectionHero header={header} logo={logo} />
    <SectionAboutProject {...sectionIntro} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionCourse} />
    <SectionModules {...sectionModule} />
    <SectionAgenda {...sectionAbout} />
    <PricingBox {...sectionAbout} />
    <SectionAboutUs {...sectionTeam} />
    <SectionReviews {...sectionReview} />
    <SectionFaq {...sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = (await client.request(GET_LANDING_PAGE)) || []

  return {
    props: { ...landingPage }
  }
}

export default Index
