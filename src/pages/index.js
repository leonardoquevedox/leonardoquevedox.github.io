import React from 'react'

import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer'

import { useSectionsContext } from 'context/SectionsContext'
import clsx from 'clsx'

const HomePage = ({ location }) => {
  const {
    hasTimeout,
    isVisible,
    isLoading,
    currentSection,
    isSectionVisible,
    setWrapperRef,
    handleCloseSection,
    handleOpenSection,
  } = useSectionsContext()

  return (
    <Layout location={location}>
      <article
        className={clsx('body', {
          'is-loading': isLoading,
          'is-article-visible': isSectionVisible,
        })}
      >
        <section id="wrapper">
          <Header onOpenSection={handleOpenSection} timeout={hasTimeout} />
          <Main
            timeout={hasTimeout}
            isVisible={isVisible}
            openSection={currentSection}
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
