import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

import Background from 'components/Background'

import './styles.scss'

const Wrapper = ({ children }) => {
  const { isLoading, currentSection } = useSectionsContext()

  return (
    <div
      className={clsx('app-layout', {
        'is-loading': isLoading,
        'is-article-visible': currentSection && currentSection !== '',
      })}
    >
      <div className="app-wrapper">{children}</div>
      <Background />
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
