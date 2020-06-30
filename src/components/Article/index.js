import React from 'react'

import PropTypes from 'prop-types'

const Article = ({ id, title, close, isVisible, openArticle, children }) => (
  <article
    id={id}
    className={'article '
      .concat(openArticle === id ? 'active ' : '')
      .concat(isVisible ? 'visible ' : '')
      .trim()}
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
