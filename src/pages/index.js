import React, { useCallback, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer'

let openingTimeoutRef = null

const HomePage = ({ location }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [hasTimeout, setHasTimeout] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [article, setSection] = useState('')
  const [loading, setLoading] = useState('is-loading')
  const [wrapperRef, setWrapperRef] = useState(null)

  const toggleSection = useCallback(() => {
    setIsSectionVisible(!isSectionVisible)
    setHasTimeout(!hasTimeout)
    setIsVisible(!isVisible)
  }, [isVisible, hasTimeout, isSectionVisible])

  const handleOpenSection = useCallback(
    (selectedSection) => {
      toggleSection()
      setSection(selectedSection)
    },
    [toggleSection],
  )

  const handleCloseSection = useCallback(() => {
    toggleSection()
    setSection('')
  }, [toggleSection])

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target) && isSectionVisible) handleCloseSection()
    },
    [isSectionVisible, wrapperRef, handleCloseSection],
  )

  useEffect(() => {
    openingTimeoutRef = setTimeout(() => {
      setLoading('')
    }, 100)

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      if (openingTimeoutRef) clearTimeout(openingTimeoutRef)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  return (
    <Layout location={location}>
      <article className={`body ${loading} ${isSectionVisible ? 'is-article-visible' : ''}`}>
        <section id="wrapper">
          <Header onOpenSection={handleOpenSection} timeout={hasTimeout} />
          <Main
            timeout={hasTimeout}
            isVisible={isVisible}
            openSection={article}
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
