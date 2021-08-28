import React from 'react'
import logoiconfios from '../../images/logoiconfios.png'
import logoipel from '../../images/logoipel.webp'
import logouniasselvi from '../../images/logouniasselvi.svg'
import logoartico from '../../images/logoartico.png'
import logohercules from '../../images/logohercules.png'
import logomuller from '../../images/logomuller.png'

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
    href: 'https://www.herculesmotores.com.br/',
    src: logohercules,
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
    href: 'https://www.incofios.com.br/',
    src: logoiconfios,
  },
]

const LogoClound = props => {
  return (
    <div className="bg-white" {...props}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-xl font-semibold uppercase text-gray-600 tracking-wider">
          Conheça nossos clientes
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
          {clients.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              className={`col-span-1 flex justify-center py-8 px-8 ${
                i % 2 > 0
                  ? 'bg-blue-100 hover:bg-blue-200'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
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

export default LogoClound
