import React, { useState } from 'react'
import { LightningBoltIcon, XIcon, CheckIcon } from '@heroicons/react/outline'
import filtroCentral from '../../images/filtroCentral.png'
import pBabyWhite from '../../images/p-baby-white.webp'
import pFitGray from '../../images/p-fit-gray.webp'
import pPlusGray from '../../images/p-plus-gray.webp'
import pSlimRed from '../../images/p-slim-red.webp'
import pStarBlack from '../../images/p-star-black.webp'
import cores3 from '../../images/cores3.png'
import cores4 from '../../images/cores4.png'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'

const transferFeatures = [
  {
    id: 1,
    description:
      "Porque ele vai filtrar a água antes dela ir pra sua caixa, levando assim água limpa em todos os pontos de uso. Além de manter a caixa d'água e as tubulações limpas.",
    icon: LightningBoltIcon,
  },
  {
    id: 2,
    description:
      'Porque ele tem carvão ativado que tira o gosto ruim e os odores da água.',
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    description:
      'Porque as camadas de cristais de quartzo retém sedimentos como areia, barro, lodo, evitando o entupimento da sua máquina de lavar, chuveiro e torneiras.',
    icon: LightningBoltIcon,
  },
]

const communicationFeatures = [
  {
    id: 1,
    description:
      'A primeira vantagem é a da filtragem, retirando pequenas partículas e substâncias da água (como ferrugem, areia e barro).',
    icon: LightningBoltIcon,
  },
  {
    id: 2,
    description:
      'A segunda é a esterilização, os purificadores eliminam micro-organismos, como fungos, vírus, micróbios e bactérias.',
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    description:
      'A terceira é a capacidade de absorção, expelindo cloro e metais nocivos.',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    description:
      'Por fim, não precisar gastar comprando galões e garrafas de água nem carregá-los de um lado para outro, porque os purificadores são ligados diretamente na rede de água.',
    icon: LightningBoltIcon,
  },
]

const products = [
  {
    name: 'Purificador de água Soft BABY',
    refrigerator: false,
    comercial: false,
    src: pBabyWhite,
    src2: cores3,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-baby/',
    weight: '1,75 Kg',
    cta: CTA_WA_MESSAGES.products1,
  },
  {
    name: 'Purificador de água Soft FIT',
    refrigerator: true,
    comercial: false,
    src: pFitGray,
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-fit/',
    weight: '10,5 Kg',
    cta: CTA_WA_MESSAGES.products2,
    capacity: '1,2 Litros',
  },
  {
    name: 'Purificador de água Soft SLIM',
    refrigerator: true,
    comercial: false,
    src: pSlimRed,
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-slim/',
    weight: '11 Kg',
    cta: CTA_WA_MESSAGES.products3,
    capacity: '1,8 Litros',
  },
  {
    name: 'Purificador de água Soft STAR',
    refrigerator: true,
    comercial: false,
    src: pStarBlack,
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-star/',
    weight: '12 Kg',
    cta: CTA_WA_MESSAGES.products4,
    capacity: '2 Litros',
  },
  {
    name: 'Purificador de água Soft PLUS',
    refrigerator: true,
    comercial: true,
    src: pPlusGray,
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-plus/',
    weight: '13,5 Kg',
    cta: CTA_WA_MESSAGES.products5,
    capacity: '2 Litros',
  },
]

const ProductCard = ({
  name,
  refrigerator,
  comercial,
  src,
  src2,
  href,
  capacity,
  weight,
  cta,
}) => {
  return (
    <div className="flex justify-center items-center px-4 md:px-16 mt-4">
      <div className="flex flex-col md:flex-row p-4 md:p-0 items-center bg-white shadow-xl rounded-xl w-full h-auto">
        <div className="flex items-center justify-center">
          <img className="h-40 w-40 rounded-xl" src={src} />
          <img className="h-20" src={src2} />
        </div>
        <div className="pl-8 flex flex-col items-center">
          <a
            // href={href}
            className="text-lg text-gray-800 hover:text-blue-400 cursor-pointer font-bold"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
          {/* <ul className="flex">
            <li>
              <span className="mt-0 text-medium ml-1 text-gray-500 flex items-center">
                {refrigerator ? (
                  <CheckIcon
                    className="h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                )}
                Refrigeração
              </span>
            </li>
            <li>
              <span className="mt-0 text-medium ml-1 text-gray-500 flex items-center">
                {comercial ? (
                  <CheckIcon
                    className="h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                )}
                Empresa
              </span>
            </li>
            <li>
              <span className="mt-0 text-medium ml-1 text-gray-500 flex items-center">
                {capacity ? (
                  <>
                    <CheckIcon
                      className="h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span>{capacity}</span>
                  </>
                ) : (
                  <>
                    <XIcon
                      className="h-6 w-6 text-red-500"
                      aria-hidden="true"
                    />
                    0 Litros
                  </>
                )}
              </span>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <span className="mt-0 text-medium ml-1 text-gray-500 flex items-center">
                <CheckIcon
                  className="h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                {weight}
              </span>
            </li>
            <li>
              <span className="mt-0 text-medium ml-1 text-gray-500 flex items-center">
                <CheckIcon
                  className="h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                28,0 X 19,5 X 18,5 cm
              </span>
            </li>
          </ul> */}
          <div className="flex">
            <a
              href={getWhatsUrl(cta)}
              className="mt-2 rounded-md shadow-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              Eu quero esse
            </a>
            <a
              href="https://www.softpurificadores.com.br/institucional/comparador"
              className="mt-2 ml-2 rounded-md shadow-md bg-blue-100 hover:bg-blue-200 px-4 py-2 text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              + Detalhes
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureSection = props => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24" {...props}>
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="2"
                className="text-blue-200"
                fill="currentColor"
              ></circle>
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Conheça os nossos produtos parceiros
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Aqui na{' '}
            <span className="text-blue-700 font-bold">
              Purificadores de Água Timbó,
            </span>{' '}
            nós nos comprometemos a entregar os{' '}
            <span className="text-blue-700 font-medium">melhores serviços</span>{' '}
            aliados aos{' '}
            <span className="text-blue-700 font-medium">melhores produtos</span>{' '}
            do mercado, por isso trabalhamos com grandes marcas parceiras como{' '}
            <a
              className="underline text-blue-400"
              href="https://www.softpurificadores.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Soft Everest
            </a>{' '}
            e{' '}
            <a
              className="underline text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              Filtrali
            </a>
            .
          </p>
        </div>

        <div
          className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          id="filters"
        >
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Filtro Central de água
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              O filtro central é um dispositivo que retém partículas de resíduos
              e de impurezas presentes na água que vem da rua. Com ele, você
              terá mais segurança, higiene e saúde, com água de melhor qualidade
              em todos os pontos de uso da sua casa, estabelecimento ou
              indústria.
            </p>

            <h3 className="mt-10 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
              Porque investir em um filtro central de água?
            </h3>
            <div className="mt-8">
              {transferFeatures.map(item => (
                <div key={item.id} className="flex mt-8">
                  <div className="flex">
                    <item.icon
                      className="h-12 w-12 p-3 bg-blue-500 rounded-md text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-base text-gray-500 ml-4">
                    {item.description}
                  </div>
                </div>
              ))}
              <div className="flex">
                <a
                  href={getWhatsUrl(CTA_WA_MESSAGES.products0)}
                  target="_blank"
                  className="mt-8 rounded-md shadow-md bg-blue-500 hover:bg-blue-700 px-6 py-4 text-white"
                  rel="noreferrer"
                >
                  Agende uma visita gratuita
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    className="text-blue-200"
                    fill="currentColor"
                  ></circle>
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto h-80 md:h-sm"
              src={filtroCentral}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="2"
                className="text-blue-200"
                fill="currentColor"
              ></circle>
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24" id="purifiers">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-0 lg:items-center">
            <div className="lg:col-start-2 lg:px-8">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Purificadores de água Soft Everest
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                O purificador de água Soft Everest possui filtro de alta
                eficiência e dupla filtração. Garante redução de cloro,
                oferecendo água livre de partículas, bico e pingadeira
                removíveis que facilitam a limpeza e o abastecimento de
                recipientes maiores. Tem três opções de temperatura – natural e
                gelada e misturada (fresca). Baixo consumo de energia e alta
                capacidade de refrigeração, porque é refrigerado por compressor.
                Com cores e modelos variados atende ambientes comerciais e
                residenciais. Além de ser um produto certificado pelo INMETRO e
                com 1 ano de garantia.
              </p>

              <h3 className="mt-10 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
                Porque investir em um purificador de água?
              </h3>
              <dl className="mt-10 space-y-10">
                {communicationFeatures.map(item => (
                  <div key={item.id} className="flex mt-4">
                    <div className="flex">
                      <item.icon
                        className="h-12 w-12 p-3 bg-blue-500 rounded-md text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-base text-gray-500 ml-4">
                      {item.description}
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              {products.map(p => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
