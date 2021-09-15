import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Main from 'components/Main'
import Footer from 'components/Footer'

import { SectionsContextProvider } from 'context/SectionsContext'

import '../../styles/main.scss'

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
