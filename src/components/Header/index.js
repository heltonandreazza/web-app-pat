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
      'Realizamos a venda e instalação de produtos aderentes ao seu projeto, contando com especialistas da área.',
    icon: HomeIcon,
  },
  {
    name: 'Manutenção preventiva',
    href: getWhatsUrl(CTA_WA_MESSAGES.servicesCta2),
    description:
      'Oferecemos planos de manutenção preventiva para garantir água de qualidade e equipamentos em perfeito funcionamento para a sua casa ou a sua empresa.',
    icon: CogIcon,
  },
  {
    name: 'Análise e Tratamento de Água',
    href: getWhatsUrl(CTA_WA_MESSAGES.servicesCta3),
    description:
      'Realizamos coleta amostral de água no cliente e realizamos análise em laboratório para então escolher a melhor solução de tratamento de água ao nosso cliente.',
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
            Tudo sobre os serviços de instalação oferecidos.
          </p>
          <p className="mt-1 max-w-3xl text-xl text-white">
            Serviçoes de venda, instalação e manutenção de purificadores de água
            e filtros centrais.
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
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-blue-700 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
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
