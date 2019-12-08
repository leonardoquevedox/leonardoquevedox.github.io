import React from 'react'

import cover from '../../assets/img/author.jpg'

class About extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}>
        <h2 className="major">Sobre</h2>
        {close}
        <span className="image main">
          <img src={cover} alt="" />
        </span>
        <p>
          <b>Leonardo Quevedo.</b> Porto alegrense de nascença, cidadão do mundo de coração. Inquieto por natureza. Uma vida
          movida e norteada pela inovação. Pronto para encarar os desafios com soluções criativas.
          Sempre em busca do novo e do desconhecido. Focado em criar experiências incríveis de
          humanos para humanos.
        </p>
      </article>
    )
  }
}

export default About
