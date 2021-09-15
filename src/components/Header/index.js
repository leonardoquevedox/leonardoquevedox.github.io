import React from 'react'

import Navbar from 'components/Navbar'

const Header = () => (
  <header>
    <div className="logo">
      <span className="icon fa fa-jedi fa-2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Leonardo Quevedo</h1>
      </div>
    </div>
    <Navbar />
  </header>
)

export default Header
