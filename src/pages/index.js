import React from 'react'

import SEO from 'components/SEO'
import Layout from 'components/Layout'

import ContactSection from 'components/Sections/ContactSection'
import IdeasSection from 'components/Sections/IdeasSection'
import ContentSection from 'components/Sections/ContentSection'
import AboutSection from 'components/Sections/AboutSection'

const HomePage = () => (
  <Layout>
    <SEO />
    <AboutSection />
    <ContentSection />
    <IdeasSection />
    <ContactSection />
  </Layout>
)

export default HomePage
