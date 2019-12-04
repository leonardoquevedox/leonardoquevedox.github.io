import React from 'react'

import pic01 from '../assets/img/pic01.jpg'

class About extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ display: 'none' }}>
        <h2 className="major">Sobre</h2>
        {close}
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          <b>24 anos.</b> Porto alegrense de nascença, <b>cidadão do mundo</b> de coração.{' '}
          <b>Inquieto</b> por natureza. Uma vida movida e norteada pela <b>inovação</b>. Pronto para
          encarar os <b>desafios</b> com soluções <b>criativas</b>. Sempre em busca do{' '}
          <b>novo e do desconhecido</b>. Focado em criar experiências incríveis{' '}
          <b>de humanos para humanos</b>.
        </p>
      </article>
    )
  }
}

export default About
