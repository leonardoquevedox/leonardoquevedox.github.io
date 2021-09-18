import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Layout/Header'
import Wrapper from 'components/Layout/Wrapper'
import Main from 'components/Main'
import Footer from 'components/Layout/Footer'

import { SectionsContextProvider } from 'context/SectionsContext'

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
