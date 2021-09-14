import React from 'react'

import pic01 from 'assets/img/code.jpg'

import Section from '../../Section'

const Ideas = () => (
  <Section id="ideas" title="Projetos">
    <p>Nuestras ideas son libres y están despiertas Porque pensamos con las puertas abiertas!</p>
    <span className="image main">
      <img src={pic01} alt="" />
    </span>
  </Section>
)

export default Ideas
