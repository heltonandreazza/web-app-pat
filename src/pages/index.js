import React, { useEffect, useState } from 'react'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'
import Faq from '../components/Faq'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoClound from '../components/LogoClound2'
import { setupGclid } from '../utils/gtag'
import '../styles/global.css'

console.log(`INDEX TOKEN ${process.env}`)

const OUTER_URL = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,timestamp,caption,username,thumbnail_url,children{id,media_url,media_type,thumbnail_url,timestamp}&access_token=${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}&limit=6`
console.log('OUTER_URL', OUTER_URL)

const Index = props => {
  console.log('props', props)
  const [instaNodes, setInstaNodes] = useState(null)

  async function loadInstaNodes() {
    const URL = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,timestamp,caption,username,thumbnail_url,children{id,media_url,media_type,thumbnail_url,timestamp}&access_token=${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}&limit=6`
    console.log('URL', URL)
    const response = await fetch(URL)
    const result = await response.json()
    setInstaNodes(result?.data)
  }

  async function setupGtag() {
    setupGclid()
  }

  useEffect(() => {
    loadInstaNodes()
    setupGtag()
  }, [])

  return (
    <div>
      <main>
        <Hero />
        <LogoClound id="clientes" />
        <Header id="servicos" />
        <FeatureSection />
        <CtaSection />
        <BlogSection items={instaNodes} />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}

export default Index
