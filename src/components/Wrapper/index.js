import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

const Wrapper = ({ children }) => {
  const { isLoading, currentSection } = useSectionsContext()

  return (
    <div
      className={clsx('body', {
        'is-loading': isLoading,
        'is-article-visible': currentSection && currentSection !== '',
      })}
    >
      <div id="site-wrapper">{children}</div>
      <div id="site-bg" />
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
