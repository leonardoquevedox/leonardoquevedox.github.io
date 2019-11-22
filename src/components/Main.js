import React from 'react'

import pic01 from '../assets/img/pic01.jpg'
import pic02 from '../assets/img/pic02.jpg'
import pic03 from '../assets/img/pic03.jpg'

class Main extends React.Component {
  render() {
    const close = (
      /* eslint-disable-next-line */
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Projetos</h2>
          {close}
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
            interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet
            egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Ideias</h2>
          {close}
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien
            imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
          </p>
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Sobre</h2>
          {close}
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            <b>24 anos.</b> Porto alegrense de nascença, <b>cidadão do mundo</b> de coração.{' '}
            <b>Inquieto</b> por natureza. Uma vida movida e norteada pela <b>inovação</b>. Pronto
            para encarar os <b>desafios</b> com soluções <b>criativas</b>. Sempre em busca do{' '}
            <b>novo e do desconhecido</b>. Focado em criar experiências incríveis{' '}
            <b>de humanos para humanos</b>.
          </p>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          {close}
          <h2 className="major">Contato</h2>
          <p>
            Formulários de contato? Formais demais. <br />
            Só chamar em um dos canais abaixo ;)
          </p>
          <ul className="icons">
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" className="icon fab fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" className="icon fab fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" className="icon fab fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" className="icon fab fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
        </article>
      </div>
    )
  }
}

export default Main
