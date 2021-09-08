import React from 'react'
import logoipel from '../../images/logoipel.webp'
import logouniasselvi from '../../images/logouniasselvi.webp'
import logoartico from '../../images/logoartico.png'
import logomuller from '../../images/logomueller.png'
import logometisa from '../../images/logometisa.webp'
import logohercules from '../../images/logohercules.png'

const clients = [
  {
    href: 'https://www.mueller.ind.br/',
    src: logomuller,
  },
  {
    href: 'https://portal.uniasselvi.com.br/',
    src: logouniasselvi,
  },
  {
    href: 'https://www.ipelpapel.com.br/',
    src: logoipel,
  },
  {
    href: 'https://www.artico.com.br/',
    src: logoartico,
  },
  {
    href: 'https://www.metisa.com.br/',
    src: logometisa,
  },
  {
    href: 'https://www.herculesmotores.com.br/',
    src: logohercules,
  },
]
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Conheça alguns dos nossos clientes
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {clients.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              className="col-span-1 flex justify-center py-8 px-8 bg-blue-200"
              rel="noreferrer"
            >
              <img className="max-h-12" src={c.src} alt="Workcation" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
