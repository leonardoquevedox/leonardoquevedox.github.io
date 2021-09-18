import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Wrapper = ({ children }) => <div className="app-wrapper">{children}</div>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
