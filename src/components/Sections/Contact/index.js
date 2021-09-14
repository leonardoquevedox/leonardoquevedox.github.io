import React from 'react'

import cover from 'assets/img/contact.jpg'

import profiles from 'data/profiles'

import Section from '../../Section'

const Contact = ({ ...props }) => (
  <Section id="contact" {...props}>
    <span className="image main">
      <img src={cover} alt="" />
    </span>
    <p>
      Formulários de contato? Formais demais! <br />
      Só chamar em um dos canais abaixo ;)
    </p>
    <ul className="icons">
      {profiles.map(
        (profile) =>
          profile && (
            <li key={profile.icon}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon fab fa-${profile.icon}`}
              >
                <span className="label">{profile.label}</span>
              </a>
            </li>
          ),
      )}
    </ul>
  </Section>
)

export default Contact
