import React from 'react'

import PropTypes from 'prop-types'
import clsx from 'clsx'

const Section = ({ id, title, close, isVisible, openSection, children }) => (
  <article
    id={id}
    className={clsx('article', {
      visible: isVisible,
      active: openSection === id,
    })}
  >
    <h2 className="major">{title}</h2>
    {close}
    {children}
  </article>
)

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  close: PropTypes.node,
  isVisible: PropTypes.bool,
  openSection: PropTypes.string,
  children: PropTypes.node,
}

Section.defaultProps = {
  id: null,
  title: '',
  close: null,
  isVisible: false,
  openSection: null,
  children: null,
}

export default Section
