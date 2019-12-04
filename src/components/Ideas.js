import React from 'react'

import pic01 from '../assets/img/pic01.jpg'

class Ideas extends React.Component {
  render() {
    const { close, isVisible, article } = this.props
    return (
      <article
        id="ideas"
        className={`${article === 'ideas' ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ display: 'none' }}>
        <h2 className="major">Código</h2>
        {close}
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
          interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet
          egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By
          the way, check out my <a href="#content">awesome content</a>.
        </p>
      </article>
    )
  }
}

export default Ideas
