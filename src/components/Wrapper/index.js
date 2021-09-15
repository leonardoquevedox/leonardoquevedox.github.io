import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

const Wrapper = ({ children }) => {
  const { isLoading, hasSelectedSection } = useSectionsContext()

  return (
    <div
      className={clsx('body', {
        'is-loading': isLoading,
        'is-article-visible': hasSelectedSection,
      })}
    >
      <div id="wrapper">{children}</div>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
