import React from 'react'
import logoipel from '../../images/logoipel.webp'
import logouniasselvi from '../../images/logouniasselvi.webp'
import logoartico from '../../images/logoartico.png'
import logomuller from '../../images/logomueller.png'
import logometisa from '../../images/logometisa.webp'

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
]

const LogoClound = props => {
  return (
    <div className="bg-blue-700" {...props}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Conheça alguns dos nossos clientes
        </h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-5 lg:mt-8">
            {clients.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                className={'col-span-1 flex justify-center p-0'}
                rel="noreferrer"
              >
                <img className="h-16" src={c.src} alt="Workcation" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoClound
