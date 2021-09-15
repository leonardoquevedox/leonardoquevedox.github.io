import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useSectionsContext } from 'context/SectionsContext'

const Section = ({ data, children }) => {
  const { hasOpenSection, currentSection, handleSectionClosure } = useSectionsContext()
  return (
    <article
      className={clsx('app-section', {
        visible: hasOpenSection,
        active: currentSection === data.href,
      })}
    >
      <h2 className="major">{data.label}</h2>
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
  children: PropTypes.node,
  data: PropTypes.shape({ href: PropTypes.string, label: PropTypes.node }),
}

Section.defaultProps = {
  children: null,
  data: {
    href: '',
    label: '',
  },
}

export default Section
