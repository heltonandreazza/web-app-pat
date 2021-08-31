import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import '../styles/global.css'

const Index = () => {
  return (
    <div>
      <main>
        <Contact />
        <Footer
          navigation={[
            { name: 'Clientes', href: '/#clients' },
            { name: 'Serviços', href: '/#services' },
            { name: 'Filtros', href: '/#filters' },
            { name: 'Purificadores', href: '/#purifiers' },
            { name: 'FAQ', href: '/#faq' },
            { name: 'Contato', href: '/#contato' },
          ]}
        />
      </main>
    </div>
  )
}

export default Index
