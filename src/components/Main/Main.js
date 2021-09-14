import React from 'react'

import Contact from '../Sections/Contact'
import Ideas from '../Sections/Ideas'
import Content from '../Sections/Content'
import About from '../Sections/About'

const Close = ({ onCloseArticle }) => (
  /* eslint-disable-next-line */
  <a
    className="close"
    onClick={() => {
      onCloseArticle()
    }}
  />
)

const Main = ({ timeout, onCloseArticle, setWrapperRef, ...props }) => (
  <div ref={setWrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'flex' }}>
    <About {...props} close={<Close onCloseArticle={onCloseArticle} />} />
    <Content {...props} close={<Close onCloseArticle={onCloseArticle} />} />
    <Ideas {...props} close={<Close onCloseArticle={onCloseArticle} />} />
    <Contact {...props} close={<Close onCloseArticle={onCloseArticle} />} />
  </div>
)

export default Main
