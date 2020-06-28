import React from 'react'
import posts from '../../config/posts'

import Article from '../Article'

import './Content.scss'

const About = ({ ...props }) => (
  <Article id="content" title="Publicações" {...props}>
    {posts &&
      posts.items &&
      posts.items.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="app-section-content__rss-post"
        >
          <img className="app-section-content__rss-post__picture" alt="" src={post.thumbnail} />
          <div className="app-section-content__rss-post__description">
            <h6 className="app-section-content__rss-post__title">{post.title}</h6>
            <i className="icon fab fa-medium" />
          </div>
        </a>
      ))}
  </Article>
)

export default About
