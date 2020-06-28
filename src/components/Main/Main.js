import React from 'react'

import Contact from '../Contact/Contact'
import Ideas from '../Ideas/Ideas'
import Content from '../Content/Content'
import About from '../About/About'

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
