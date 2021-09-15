import React from 'react'

import Section from 'components/Section'

import sections from 'config/sections'

import posts from 'data/posts'

import './ContentSection.scss'

const ContentSection = () => (
  <Section data={sections.content}>
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
  </Section>
)

export default ContentSection
