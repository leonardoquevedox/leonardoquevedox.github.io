import React from 'react'

import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useSectionsContext } from 'context/SectionsContext'

const Section = ({ id, title, close, children }) => {
  const { hasOpenSection, currentSection } = useSectionsContext()

  return (
    <article
      className={clsx('article', {
        visible: hasOpenSection,
        active: currentSection === id,
      })}
    >
      <h2 className="major">{title}</h2>
      {close}
      {children}
    </article>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  close: PropTypes.node,
  children: PropTypes.node,
}

Section.defaultProps = {
  id: null,
  title: '',
  close: null,
  children: null,
}

export default Section
