import React, { useEffect, useState } from 'react'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'
import Faq from '../components/Faq'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoClound from '../components/LogoClound2'
import '../styles/global.css'

const Index = () => {
  const [instaNodes, setInstaNodes] = useState(null)

  async function loadInstaNodes() {
    const response = await fetch(
      'https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,timestamp,caption,username,thumbnail_url,children{id,media_url,media_type,thumbnail_url,timestamp}&access_token=IGQVJWQVA2dG1DWXB6Qm82bDFGQnZAmYUktSTBYRmxWTW40QVBCbjRTRXQ3Szd5ZAG9tWGJvZAm5RVko2UEJOWWNJVXhPUkoxdkU0OGNGMUd5RE9mUjNoN2I4UlhTQ2JXUzFVSjdsQVNPZAmo3NDFnTUhGUQZDZD&limit=6',
    )
    const result = await response.json()
    setInstaNodes(result?.data)
  }

  useEffect(() => {
    loadInstaNodes()
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
