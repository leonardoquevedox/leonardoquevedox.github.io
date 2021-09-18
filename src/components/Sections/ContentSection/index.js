import React from 'react'

import Section from 'components/Section'

import sections from 'config/sections'

import posts from 'data/posts'
// import videos from 'data/videos'
import ContentCard from './ContentCard'

import './styles.scss'

const ContentSection = () => (
  <Section data={sections.content}>
    {posts &&
      posts.items &&
      posts.items.map((post) => (
        <ContentCard
          href={post.link}
          title={post.title}
          image={{ src: post.thumbnail, alt: post.title }}
        />
      ))}
    {/* {videos.map((video) => (
      <ContentCard
        href={video.link}
        title={video.title}
        image={{ src: video.thumbnail, alt: video.title }}
      />
    ))} */}
  </Section>
)

export default ContentSection
