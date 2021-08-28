import '@brainhubeu/react-carousel/lib/style.css'
import React from 'react'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'
import Faq from '../components/Faq'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoClound from '../components/LogoClound'
import '../styles/global.css'

const Index = () => {
  return (
    <div>
      <main>
        <Hero />
        <LogoClound id="clients" />
        <Header id="services" />
        <FeatureSection />
        <CtaSection />
        <BlogSection />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}

export default Index
