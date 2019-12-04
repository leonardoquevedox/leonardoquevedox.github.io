import React from 'react'

import Contact from './Contact'
import Ideas from './Ideas'
import Content from './Content'
import About from './About'

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
        style={this.props.timeout ? { display: 'flex' } : { display: 'flex' }}>
        <About {...this.props} close={close} />
        <Content {...this.props} close={close} />
        <Ideas {...this.props} close={close} />
        <Contact {...this.props} close={close} />
      </div>
    )
  }
}

export default Main
