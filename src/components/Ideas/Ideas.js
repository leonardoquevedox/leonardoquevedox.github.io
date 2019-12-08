import React from 'react'

import pic01 from '../../assets/img/code.jpg'

class Ideas extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="ideas"
        className={`${article === 'ideas' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}>
        <h2 className="major">Projetos</h2>
        {close}
        <p>
          Nuestras ideas son libres y están despiertas Porque pensamos con las puertas abiertas!
        </p>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
      </article>
    )
  }
}

export default Ideas
