/* eslint-disable react/display-name */
import React from 'react'
import { URLS } from '../../utils/constants'
import { IconFB, IconInsta } from '../Icon'

const DEFAULT_NAVIGATION = [
  { name: 'Clientes', href: '#clients' },
  { name: 'Serviços', href: '#services' },
  { name: 'Filtros', href: '#filters' },
  { name: 'Purificadores', href: '#purifiers' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '/contato' },
]

const SOCIAL = [
  {
    name: 'Facebook',
    href: URLS.facebook,
    icon: props => <IconFB {...props} />,
  },
  {
    name: 'Instagram',
    href: URLS.instagram,
    icon: props => <IconInsta {...props} />,
  },
]

const Footer = ({ navigation = DEFAULT_NAVIGATION }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map(item => (
            <div key={item.name} className="px-5 py-2">
              <p
                onClick={() => window.location.replace(item.href)}
                className="cursor-pointer text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </p>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {SOCIAL.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2021 Purificadores de Água Timbó, Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
