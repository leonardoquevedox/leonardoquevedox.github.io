import React from 'react'

import PropTypes from 'prop-types'
import clsx from 'clsx'

const Article = ({ id, title, close, isVisible, openArticle, children }) => (
  <article
    id={id}
    className={clsx('article', {
      visible: isVisible,
      active: openArticle === id,
    })}
  >
    <h2 className="major">{title}</h2>
    {close}
    {children}
  </article>
)

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  close: PropTypes.node,
  isVisible: PropTypes.bool,
  openArticle: PropTypes.string,
  children: PropTypes.node,
}

Article.defaultProps = {
  id: null,
  title: '',
  close: null,
  isVisible: false,
  openArticle: null,
  children: null,
}

export default Article
