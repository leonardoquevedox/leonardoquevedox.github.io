import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../theme/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="pt-BR" />
            {/* <title>
              Psicóloga em São Leopoldo, Porto Alegre e Online | Psicóloga Priscila de Melo | Terapia
            </title>
            <meta
              name="description"
              content="Psicóloga clínica e social. Mestrado em Saúde Coletiva. Atendimentos individuais com crianças, adolescentes e adultos. Terapia de casal. Atendimento clínico."
            />
            <meta
              name="keywords"
              content="Psicologia, Psicóloga, Terapia, Psicoterapia, Atendimento psicológico, Avaliação psicológica, Psicóloga infantil, Psicóloga criança, Psicóloga casal, Psicóloga São Leopoldo, Psicóloga Porto Alegre, Psicóloga Online"
            />
            <meta name="robots" content="" />
            <meta name="revisit-after" content="1 day" />
            <meta name="language" content="Portuguese" />

            <meta charset="UTF-8" />
            <meta
              name="twitter:title"
              content="Psicóloga Priscila de Melo | Psicóloga em São Leopoldo, Porto Alegre e Online"
            />
            <link rel="shortcut icon" href="assets/images/favicon-2.png" type="image/x-icon" /> */}
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
