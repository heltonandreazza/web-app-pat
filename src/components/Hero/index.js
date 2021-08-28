import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useInterval from '../../hooks/useInterval'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES, URLS } from '../../utils/constants'
import { IconFB, IconInsta } from '../Icon'
import Slider from '../Slider'
const navigation = [
  { name: 'Clientes', href: '#clients' },
  { name: 'Serviços', href: '#services' },
  { name: 'Filtros', href: '#filters' },
  { name: 'Purificadores', href: '#purifiers' },
  { name: 'FAQ', href: '#faq' },
]

const Hero = () => {
  const [value, setValue] = useState(0)

  useInterval(() => {
    const newValue = value === 2 ? 0 : value + 1
    setValue(newValue)
  }, 3000)

  const onChange = value => {
    setValue(value)
  }
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

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map(item => (
                    <AnchorLink key={item.name} href={item.href}>
                      {item.name}
                    </AnchorLink>
                  ))}
                  <a
                    key={'Instagram'}
                    href={URLS.instagram}
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-500 cursor-pointer"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <IconInsta className="h-10 w-10" aria-hidden="true" />
                  </a>
                  <a
                    key={'Facebook'}
                    href={URLS.facebook}
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-500 cursor-pointer"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Facebook</span>
                    <IconFB className="h-10 w-10" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

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
        <Slider />
      </div>
    </div>
  )
}

export default Hero
