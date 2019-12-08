import React from 'react'
import { articles } from '../../config/index'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa fa-jedi fa-2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Leonardo Quevedo</h1>
        <p>
          Porto Alegre, RS. Software Engineer. (Coffee | Type | <b>JavaScript</b>. <br />
          Especialista em <b>PWAs</b>. Evangelista de <b>Aplicativos Universais</b>.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {articles.map(
          article =>
            article && (
              <li key={article.href}>
                <a
                  href="#"
                  onClick={() => {
                    props.onOpenArticle(article.href)
                  }}>
                  {article.label}
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  </header>
)

export default Header
