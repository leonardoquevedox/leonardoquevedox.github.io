import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const ContentCard = ({ title, href, image }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="app-content-card">
    <img className="app-content-card__picture" alt={image.alt} src={image.src} />
    <div className="app-content-card__description">
      <h6 className="app-content-card__title">{title}</h6>
      <i className="icon fab fa-medium" />
    </div>
  </a>
)

ContentCard.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
}

export default ContentCard
