import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa fa-jedi fa-2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Leonardo Quevedo</h1>
        <p>
          {' '}
          Porto Alegre, RS. Software Engineer. (Coffee | Type |{' '}
          <b>JavaScript</b>. <br />
          Especialista em <b>PWAs</b>. Evangelista de{' '}
          <b>Aplicativos Universais</b>.{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Sobre
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Projetos
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Ideias
          </a>
        </li>

        <li>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
