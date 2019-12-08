import React from 'react'

import pic01 from '../../assets/img/pic01.jpg'

import { socialProfiles } from '../../config'

class Contact extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}>
        {close}
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <h2 className="major">Contato</h2>
        <p>
          Formulários de contato? Formais demais! <br />
          Só chamar em um dos canais abaixo ;)
        </p>
        <ul className="icons">
          {socialProfiles.map(
            profile =>
              profile && (
                <li key={profile.icon}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon fab fa-${profile.icon}`}>
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
