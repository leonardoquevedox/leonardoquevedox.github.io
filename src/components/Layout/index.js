import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/main.scss'
import SEO from 'components/SEO'

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
    <>
      <SEO /> {content}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default Layout
