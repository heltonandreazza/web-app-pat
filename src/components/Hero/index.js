import React, { useState } from 'react'
import useInterval from '../../hooks/useInterval'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import Navigator from '../Navigator'
import Slider from '../Slider'

const Hero = () => {
  const [value, setValue] = useState(0)

  useInterval(() => {
    const newValue = value === 2 ? 0 : value + 1
    setValue(newValue)
  }, 3000)

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Navigator />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Purificadores de Água Timbó.{' '}
                </span>
                <span className="block text-blue-600 xl:inline">
                  Sua Fonte de Água Pura
                </span>
              </h1>
              <p className="mt-3 text-base font-bold text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Venda, Instalação e Manutenção de Filtros e Purificadores de
                Água. Representante{' '}
                <a
                  href="https://www.puribras.com.br/home#"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-400"
                >
                  PURIBRAS
                </a>{' '}
                em SC.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl lg:mx-0">
                Uma{' '}
                <span className="text-blue-700 font-medium">vida saudável</span>{' '}
                é desejo de todos nós. Afinal, sem saúde a vida não tem o mesmo
                significado. Mas o que é vida sem{' '}
                <span className="text-blue-700 font-medium">água</span>?
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl lg:mx-0">
                É com essa missão que oferecemos os{' '}
                <span className="text-blue-700 font-medium">
                  melhores serviços e produtos
                </span>{' '}
                para que você tenha{' '}
                <span className="text-blue-700 font-medium">
                  água de alta qualidade
                </span>
                .
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={getWhatsUrl(CTA_WA_MESSAGES.heroCta1)}
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    rel="noreferrer"
                  >
                    Agende uma visita gratuita
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={getWhatsUrl(CTA_WA_MESSAGES.heroCta2)}
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    rel="noreferrer"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:h-full">
        <Slider images={['banner.jpeg', 'banner2.jpeg', 'banner3.jpeg']} />
      </div>
    </div>
  )
}

export default Hero
