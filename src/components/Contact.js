import React from 'react'
import { socialProfiles } from '../config'

class Contact extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ display: 'none' }}>
        {close}
        <h2 className="major">Contato</h2>
        <p>
          Formulários de contato? Formais demais! <br />
          Só chamar em um dos canais abaixo ;)
        </p>
        <ul className="icons">
          {socialProfiles.map(
            profile =>
              profile && (
                <li>
                  <a href={profile.url} className={`icon fab fa-${profile.icon}`}>
                    <span className="label">{profile.label}</span>
                  </a>
                </li>
              )
          )}
        </ul>
      </article>
    )
  }
}

export default Contact
