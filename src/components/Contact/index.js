import React, { useState } from 'react'
import { getWhatsUrl, handleCtaClick } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import { gtagReportConversion } from '../../utils/gtag'

export default function Example() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  function allFields() {
    return nome && email && telefone && mensagem
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contato
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Contate um de nossos consultores por e-mail,{' '}
            <a
              href="#"
              onClick={() =>
                open('mailto:purificadorespuribrastimbo@gmail.com')
              }
              className="cta-button-email text-blue-500 font-medium py-3"
            >
              purificadorespuribrastimbo@gmail.com
            </a>
            , preenchendo esse formulário ou nos contate via{' '}
            <a
              className="cta-button-whats underline text-blue-400 py-3"
              onClick={handleCtaClick(CTA_WA_MESSAGES.ctaContact2)}
              target="_blank"
            >
              whatsapp
            </a>
            .
          </p>
        </div>
        <form
          action="/success/"
          name="CONTATO-CLIENTES-PURIFICADORES-TIMBO"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          className="mt-12"
          subject="Contato do cliente recebido via site!"
        >
          <input
            type="hidden"
            name="form-name"
            value="CONTATO-CLIENTES-PURIFICADORES-TIMBO"
          />
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="digite seu nome e sobrenome"
                  onChange={event => setNome(event.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Empresa"
                className="block text-sm font-medium text-gray-700"
              >
                Empresa (opcional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="digite o nome da sua empresa"
                  onChange={event => setEmpresa(event.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="digite seu email"
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="(99) 99999-9999"
                  onChange={event => setTelefone(event.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                  onChange={event => setMensagem(event.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                className={`cta-button-whats w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 pt-6
                  ${
                    allFields()
                      ? 'bg-blue-500 hover:bg-blue-700 cursor-pointer'
                      : 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed pointer-events-none'
                  }`}
                type="submit"
                onClick={async () => await gtagReportConversion()}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
