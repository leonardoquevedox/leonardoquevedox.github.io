import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

import Header from './Header'
import Wrapper from './Wrapper'
import Main from './Main'
import Background from './Background'
import Footer from './Footer'

import '../../styles/index.scss'

const Layout = ({ children }) => {
  const { isLoading, currentSection } = useSectionsContext()
  return (
    <div
      className={clsx('app-layout', {
        'is-loading': isLoading,
        'is-article-visible': currentSection && currentSection !== '',
      })}
    >
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
      <Background />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
