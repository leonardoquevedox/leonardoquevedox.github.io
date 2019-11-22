import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Leonardo Quevedo. Feel free to clone on Github.</p>
    </footer>
)

export default Footer
