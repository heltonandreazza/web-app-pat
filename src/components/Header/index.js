import { BeakerIcon, CogIcon, HomeIcon } from '@heroicons/react/outline'
import React from 'react'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import services from '../../images/services.jpeg'

const supportLinks = [
  {
    name: 'Projeto e Instalação',
    href: getWhatsUrl(CTA_WA_MESSAGES.servicesCta1),
    description:
      'Através de visita in loco e coleta de informações é possível dimensionar o aparelho ideal para a necessidade do cliente e a partir daí realizamos a venda e a instalação do produto.',
    icon: HomeIcon,
  },
  {
    name: 'Manutenção preventiva',
    href: getWhatsUrl(CTA_WA_MESSAGES.servicesCta2),
    description:
      'Oferecemos planos mensais, trimestrais, semestrais e anuais de manutenção preventiva residencial e empresarial. Visando equipamentos em perfeito funcionamento e garantindo água de qualidade, seja para consumo humano ou para o processo produtivo da sua empresa.',
    icon: CogIcon,
  },
  {
    name: 'Análise e Tratamento de Água',
    href: getWhatsUrl(CTA_WA_MESSAGES.servicesCta3),
    description:
      'É realizada coleta amostral da água através de laboratório especializado, e após o resultado dessa análise, indicamos o melhor tratamento para tornar a água potável.',
    icon: BeakerIcon,
  },
]

const Header = props => {
  return (
    <div className="bg-white" {...props}>
      {/* Header */}
      <div className="relative pb-32">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={services} alt="" />
          <div
            className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-70"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Serviços
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            Conheça os serviços oferecidos pela Purificadores de Água Timbó.
          </p>
          <p className="mt-1 max-w-3xl text-xl text-white">
            Aqui você encontra tudo o que precisa para deixar sua água limpa de
            verdade.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Fale conosco
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8  pb-4 md:pt-6">
                <a
                  href={link.href}
                  className="cta-button-whats text-base font-medium text-blue-700 hover:text-blue-600 pt-5 md:pt-6"
                  target="_blank"
                >
                  Fale conosco<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Header
