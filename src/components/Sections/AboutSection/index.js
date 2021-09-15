import React from 'react'

import cover from 'assets/img/author.jpg'

import sections from 'config/sections'

import Section from '../../Section'

const About = () => (
  <Section data={sections.about}>
    <span className="image main">
      <img src={cover} alt="" />
    </span>
    <p>
      <b>Leonardo Quevedo.</b> Porto alegrense de nascença, cidadão do mundo de coração. Inquieto
      por natureza. Uma vida movida e norteada pela inovação. Pronto para encarar os desafios com
      soluções criativas. Sempre em busca do novo e do desconhecido. Focado em criar experiências
      incríveis de humanos para humanos.
    </p>
  </Section>
)

export default About
