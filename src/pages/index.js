import React from 'react'

import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer'

import { useSectionsContext } from 'context/SectionsContext'

const HomePage = ({ location }) => {
  const {
    hasTimeout,
    isVisible,
    section,
    loading,
    isSectionVisible,
    setWrapperRef,
    handleCloseSection,
    handleOpenSection,
  } = useSectionsContext()

  return (
    <Layout location={location}>
      <article className={`body ${loading} ${isSectionVisible ? 'is-article-visible' : ''}`}>
        <section id="wrapper">
          <Header onOpenSection={handleOpenSection} timeout={hasTimeout} />
          <Main
            timeout={hasTimeout}
            isVisible={isVisible}
            openSection={section}
            isSectionVisible={isSectionVisible}
            onCloseSection={handleCloseSection}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={hasTimeout} />
        </section>
        <section id="bg" />
      </article>
    </Layout>
  )
}

HomePage.propTypes = {
  location: PropTypes.string,
}

HomePage.defaultProps = {
  location: '',
}

export default HomePage
