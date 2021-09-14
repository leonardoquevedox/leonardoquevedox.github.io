import React from 'react'

import Contact from '../Sections/Contact'
import Ideas from '../Sections/Ideas'
import Content from '../Sections/Content'
import About from '../Sections/About'

const Close = ({ onCloseSection }) => (
  /* eslint-disable-next-line */
  <a
    className="close"
    onClick={() => {
      onCloseSection()
    }}
  />
)

const Main = ({ timeout, onCloseSection, setWrapperRef, ...props }) => (
  <div ref={setWrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'flex' }}>
    <About {...props} close={<Close onCloseSection={onCloseSection} />} />
    <Content {...props} close={<Close onCloseSection={onCloseSection} />} />
    <Ideas {...props} close={<Close onCloseSection={onCloseSection} />} />
    <Contact {...props} close={<Close onCloseSection={onCloseSection} />} />
  </div>
)

export default Main
