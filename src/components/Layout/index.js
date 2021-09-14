import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { SectionsContextProvider } from 'context/SectionsContext'

import '../../styles/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <SectionsContextProvider>
      {({ isLoading, hasSelectedSection }) => (
        <div id="wrapper">
          <article
            className={clsx('body', {
              'is-loading': isLoading,
              'is-article-visible': hasSelectedSection,
            })}
          >
            <Header />
            {content}
            <Footer />
          </article>
        </div>
      )}
    </SectionsContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default Layout
