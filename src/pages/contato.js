import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import logo from '../images/logo.png'
import '../styles/global.css'
import { getWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES } from '../utils/constants'

const Navigation = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div as="nav" className="hidden md:flex space-x-10">
            <a
              href="/#clientes"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Clientes
            </a>
            <a
              href="/#servicos"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Serviços
            </a>
            <a
              href="/#filtros"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Filtros
            </a>
            <a
              href="/#purificadores"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Purificadores
            </a>
            <a
              href="/#faq"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              FAQ
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href={getWhatsUrl(CTA_WA_MESSAGES.ctaContact1)}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/#clientes"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Clientes
                </a>
                <a
                  href="/#servicos"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Serviços
                </a>
                <a
                  href="/#filtros"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Filtros
                </a>
                <a
                  href="/#purificadores"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Purificadores
                </a>
                <a
                  href="/#faq"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  FAQ
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const Contacts = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Contatos
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Timbó - SC
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="#"
                        onClick={() =>
                          open('mailto:purificadorespuribrastimbo@gmail.com')
                        }
                        className="text-blue-400 underline"
                      >
                        purificadorespuribrastimbo@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href={getWhatsUrl(CTA_WA_MESSAGES.ctaContact2)}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        (47) 99656-7125
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href={`https://wa.me/5547999667797?text=${CTA_WA_MESSAGES.ctaContact2}`}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        (47) 99966-7797
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  São José dos Pinhas - PR{' '}
                </h3>
                <a
                  className="text-blue-400 underline"
                  href="https://www.puribras.com.br/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Puribras
                </a>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="#"
                        onClick={() => open('mailto:puribras@puribras.com.br')}
                        className="text-blue-400 underline"
                      >
                        puribras@puribras.com.br
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        href={'https://wa.me/554133851377'}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        (41) 3385-1377
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <div>
      <main>
        <Navigation />
        <Contact />
        <Contacts />
        <Footer
          navigation={[
            { name: 'Clientes', href: '/#clientes' },
            { name: 'Serviços', href: '/#servicos' },
            { name: 'Filtros', href: '/#filtros' },
            { name: 'Purificadores', href: '/#purificadores' },
            { name: 'FAQ', href: '/#faq' },
            { name: 'Contato', href: '/#contato' },
          ]}
        />
      </main>
    </div>
  )
}

export default Index
