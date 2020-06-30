import React, { useCallback, useState, useEffect } from 'react'

import { Header, Main, Footer, Layout } from '../components'

let openingTimeoutRef = null

const IndexPage = ({ location }) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [hasTimeout, setHasTimeout] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')
  const [wrapperRef, setWrapperRef] = useState(null)

  const toggleArticle = useCallback(() => {
    setIsArticleVisible(!isArticleVisible)
    setHasTimeout(!hasTimeout)
    setIsVisible(!isVisible)
  }, [isVisible, hasTimeout, isArticleVisible])

  const handleOpenArticle = useCallback(
    (selectedArticle) => {
      toggleArticle()
      setArticle(selectedArticle)
    },
    [toggleArticle],
  )

  const handleCloseArticle = useCallback(() => {
    toggleArticle()
    setArticle('')
  }, [toggleArticle])

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target) && isArticleVisible) handleCloseArticle()
    },
    [isArticleVisible, wrapperRef, handleCloseArticle],
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
      <article className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
        <section id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={hasTimeout} />
          <Main
            timeout={hasTimeout}
            isVisible={isVisible}
            openArticle={article}
            isArticleVisible={isArticleVisible}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={hasTimeout} />
        </section>
        <section id="bg" />
      </article>
    </Layout>
  )
}

export default IndexPage
