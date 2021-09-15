import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

const Section = ({ id, title, children }) => {
  const { hasOpenSection, currentSection, handleSectionClosure } = useSectionsContext()
  return (
    <article
      className={clsx('app-section', {
        visible: hasOpenSection,
        active: currentSection === id,
      })}
    >
      <h2 className="major">{title}</h2>
      <button
        className="close"
        onClick={() => {
          handleSectionClosure()
        }}
      >
        Fechar
      </button>
      {children}
    </article>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  children: PropTypes.node,
}

Section.defaultProps = {
  id: null,
  title: '',
  children: null,
}

export default Section
