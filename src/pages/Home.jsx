import React from 'react'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'

export default function Home(){
  return (
    <>
      <Hero />
      <Skills />
      <section className="container row no-divider" style={{ gap: 48, paddingTop: 40, paddingBottom: 40 }}>
        <Services />
        <About />
      </section>
      <Experience />
      <Education />
      <Contact />
    </>
  )
}
