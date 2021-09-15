import React from 'react'

import sections from 'config/sections'
import { useSectionsContext } from 'context/SectionsContext'

const Header = () => {
  const { handleSectionOpening } = useSectionsContext()

  return (
    <header>
      <div className="logo">
        <span className="icon fa fa-jedi fa-2x" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Leonardo Quevedo</h1>
          <p>
            Porto Alegre, RS <br />| Software Engineer @
            <a href="https://www.trin.ca" rel="noopener noreferrer" target="_blank">
              <b>trinca137</b> |
            </a>{' '}
            JavaScript Fullstack | <br />
            Especialista em <b>mobile</b> | Advocate de <b>Aplicativos Universais</b> | Devops | IA
            Enthusiast.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          {sections.map(
            (section) =>
              section && (
                <li key={section.href}>
                  <button
                    onClick={() => {
                      handleSectionOpening(section.href)
                    }}
                  >
                    {section.label}
                  </button>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
