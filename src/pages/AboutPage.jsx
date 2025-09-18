import React from 'react'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'

export default function AboutPage(){
  return (
    <section className="container row" style={{ gap: 48, paddingTop: 40, paddingBottom: 40 }}>
      <Services />
      <About />
    </section>
  )
}

