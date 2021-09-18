import React from 'react'
import PropTypes from 'prop-types'

import { SectionsContextProvider } from 'context/SectionsContext'

import Header from './Header'
import Wrapper from './Wrapper'
import Main from './Main'
import Footer from './Footer'

import '../../styles/index.scss'

const Layout = ({ children }) => (
  <SectionsContextProvider>
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </SectionsContextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
