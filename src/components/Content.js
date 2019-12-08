import React from 'react'
import posts from '../config/posts'
import pic02 from '../assets/img/pic02.jpg'

class About extends React.Component {
  render() {
    const { close, isVisible, article } = this.props

    return (
      <article
        id="content"
        className={`${article === 'content' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ display: 'none' }}>
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
              className="rss-post">
              <img className="rss-post__picture" alt="" src={post.thumbnail} />
              <div className="rss-post__description">
                <h6 className="rss-post__title">{post.title}</h6>
                <i className="icon fab fa-medium" />
              </div>
            </a>
          ))}
      </article>
    )
  }
}

export default About
