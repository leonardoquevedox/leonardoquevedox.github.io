import React from 'react'
import posts from '../../config/posts'

import './Content.scss'

class About extends React.Component {
  render() {
    const { close, isVisible, article } = this.props

    return (
      <article
        id="content"
        className={`app-section-content ${article === 'content' ? 'active' : ''} ${
          isVisible ? 'visible' : ''
        }`}>
        <h2 className="major">Publicações</h2>
        {close}
        {posts &&
          posts.items &&
          posts.items.map(post => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="app-section-content__rss-post">
              <img className="app-section-content__rss-post__picture" alt="" src={post.thumbnail} />
              <div className="app-section-content__rss-post__description">
                <h6 className="app-section-content__rss-post__title">{post.title}</h6>
                <i className="icon fab fa-medium" />
              </div>
            </a>
          ))}
      </article>
    )
  }
}

export default About
