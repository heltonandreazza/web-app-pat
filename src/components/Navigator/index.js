import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { URLS } from '../../utils/constants'
import { IconFB, IconInsta } from '../Icon'
import logo from '../../images/logo.png'
const navigation = [
  { name: 'Clientes', href: '#clientes' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Filtros', href: '#filtros' },
  { name: 'Purificadores', href: '#purificadores' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '/contato', anchor: true },
]

const Navigator = () => (
  <Popover>
    <div className="relative pt-2 px-4 sm:px-0 sm:pt-10">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img className="w-auto h-24" src={logo} />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center md:ml-6 md:pr-4 md:space-x-4">
          {navigation.map(item =>
            item.anchor ? (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-blue-700"
              >
                {item.name}
              </a>
            ) : (
              <AnchorLink
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-blue-700"
              >
                {item.name}
              </AnchorLink>
            ),
          )}
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
              <img className="h-8 w-auto" src={logo} alt="" />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            {navigation.map(item =>
              item.anchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ) : (
                <AnchorLink
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </AnchorLink>
              ),
            )}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
)

export default Navigator
