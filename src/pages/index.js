import React from 'react'
import clsx from 'clsx'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'

import ContactSection from 'components/Sections/ContactSection'
import IdeasSection from 'components/Sections/IdeasSection'
import ContentSection from 'components/Sections/ContentSection'
import AboutSection from 'components/Sections/AboutSection'

import { useSectionsContext } from 'context/SectionsContext'

const SectionCloseButton = () => {
  const { handleSectionClosure } = useSectionsContext()

  return (
    // eslint-disable-next-line
    <a
      className="close"
      onClick={() => {
        handleSectionClosure()
      }}
    />
  )
}

const HomePage = () => {
  const { hasOpenSection, isLoading, setWrapperRef } = useSectionsContext()

  return (
    <Layout>
      <article
        className={clsx('body', {
          'is-loading': isLoading,
          'is-article-visible': hasOpenSection,
        })}
      >
        <section id="wrapper">
          <Header />
          <SectionCloseButton />
          <div id="main" ref={setWrapperRef}>
            <AboutSection />
            <ContentSection />
            <IdeasSection />
            <ContactSection />
          </div>
          <Footer isLoading={isLoading} />
        </section>
        <section id="bg" />
      </article>
    </Layout>
  )
}

export default HomePage
