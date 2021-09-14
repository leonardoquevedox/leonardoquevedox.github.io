import React from 'react'
import Helmet from 'react-helmet'

import seo from 'config/seo'

import '../../styles/main.scss'

const SEO = () => {
  const { title, description } = seo

  return (
    <>
      <Helmet title={title}>
        <html lang="pt-BR" />
        {/* Geneal */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Leonardo Quevedo" />

        {/* Crawlers */}
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Google */}
        <link rel="author" href="Leonardo Quevedo" />
        <link rel="publisher" href="Leonardo Quevedo" />
        <meta itemProp="name" content="leonardoquevedo:page:home | Leonardo Quevedo" />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="https://i.imgur.com/8BYAMHC.png" />

        {/* Facebook */}
        <meta property="og:url" content="http://leonardoquevedo.com/" />
        <meta property="og:site_name" content="leonardoquevedo.com" />
        <meta property="og:image" content="https://i.imgur.com/8BYAMHC.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="leonardoquevedo:page:home | Leonardo Quevedo" />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@leopq" />
        <meta name="twitter:title" content="leonardoquevedo:page:home | Leonardo Quevedo" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@leopq" />
        <meta name="twitter:image:src" content="https://i.imgur.com/8BYAMHC.png" />
      </Helmet>
    </>
  )
}

export default SEO
