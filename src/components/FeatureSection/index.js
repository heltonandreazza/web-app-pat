import { CheckIcon, LightningBoltIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import cores3 from '../../images/cores3.png'
import cores4 from '../../images/cores4.png'
import filtroResidencial from '../../images/filtroResidencial.png'
import filtroIndustrial from '../../images/filtroIndustrial.png'
import filtroAutomatizada from '../../images/filtroAutomatizada.png'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import ProductCard from '../ProductCard'

const filterFeatures = [
  {
    id: 1,
    description:
      'Porque ele vai filtrar a água antes dela ir para a caixa levando assim água limpa em todos os pontos de uso (torneiras, chuveiros, máquinas de lavar roupas e louças...)',
    icon: LightningBoltIcon,
  },
  {
    id: 2,
    description:
      'Porque ele vai manter a caixa d’água e as tubulações limpas por mais tempo.',
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    description:
      'Porque ele tem carvão ativado que tira o gosto ruim e os odores da água.',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    description:
      'Porque as camadas de cristais de quartzo (carga filtrante) retém sedimentos como areia, barro e lodo evitando o entupimento das torneiras e demais pontos de água.',
    icon: LightningBoltIcon,
  },
  {
    id: 5,
    description:
      'Porque usamos a água da torneira para escovar os dentes, fazer comida, fazer sucos, chás e cafés e tomar banho e nossos pets bebem dessa água.',
    icon: LightningBoltIcon,
  },
]

const purifiersFeatures = [
  {
    id: 1,
    description:
      'Com o purificador você tem água gelada e filtrada a hora que quiser, não precisa mais encher a garrafinha de água e colocar na geladeira.',
    icon: LightningBoltIcon,
  },
  {
    id: 2,
    description:
      'O purificador Soft Everest possui refil com carvão ativado que reduz o cloro da água, eliminando aquele gosto ruim da água da rede pública.',
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    description:
      'Você economiza na compra de bombona de água, pois o purificador é um investimento que se paga a médio prazo, dependendo da quantidade de água consumida.',
    icon: LightningBoltIcon,
  },
]

const purifiers = [
  {
    name: 'Purificador de água Soft BABY',
    src2: cores3,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-baby/',
    cta: CTA_WA_MESSAGES.products1,
    items: [
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água natural',
      },
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso exclusivamente Residencial',
      },
      {
        label: 'Modelo: Baby',
      },
      {
        label: 'Dimensões: 28,0x19,5x18,5 (A-L-P)',
      },
      {
        label: 'Peso: 1,75 kg',
      },
    ],
    images: [
      'p-baby-white.webp',
      'p-baby-red.webp',
      'p-baby-black.webp',
      'p-baby-white.webp',
    ],
  },
  {
    name: 'Purificador de água Soft FIT',
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-fit/',
    cta: CTA_WA_MESSAGES.products2,
    items: [
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água natural e gelada',
      },
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso Residencial e Comercial',
      },
      {
        label: 'Modelo: Fit',
      },
      {
        label: 'Dimensões: 28,0x30,5x37,0 (A-L-P)',
      },
      {
        label: 'Peso: 10,5 kg',
      },
      {
        label: 'Armazenamento de água gelada: 1,2 litros',
      },
      {
        label: 'Água gelada suficiente para atender 15 pessoas',
      },
    ],
    images: [
      'p-fit-white.webp',
      'p-fit-red.webp',
      'p-fit-black.webp',
      'p-fit-gray.webp',
    ],
  },
  {
    name: 'Purificador de água Soft SLIM',
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-slim/',
    cta: CTA_WA_MESSAGES.products3,
    items: [
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água natural e gelada',
      },
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso Residencial e Comercial',
      },
      {
        label: 'Modelo: Slim',
      },
      {
        label: 'Dimensões: 36,0x27,5x37,0 (A-L-P)',
      },
      {
        label: 'Peso: 11,0 kg',
      },
      {
        label: 'Armazenamento de água gelada: 1,8 litros',
      },
      {
        label: 'Água gelada suficiente para atender 15 pessoas',
      },
    ],
    images: [
      'p-slim-white.webp',
      'p-slim-red.webp',
      'p-slim-black.webp',
      'p-slim-gray.webp',
    ],
  },
  {
    name: 'Purificador de água Soft STAR',
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-star/',
    cta: CTA_WA_MESSAGES.products4,
    capacity: '2 Litros',
    items: [
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água natural e gelada',
      },
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso Residencial e Comercial',
      },
      {
        label: 'Modelo: Star',
      },
      {
        label: 'Dimensões: 39,5x30,5x37,0 (A-L-P)',
      },
      {
        label: 'Peso: 12,0 kg',
      },
      {
        label: 'Armazenamento de água gelada: 2,0 litros',
      },
      {
        label: 'Água gelada suficiente para atender 15 pessoas',
      },
    ],
    images: [
      'p-slim-white.webp',
      'p-slim-red.webp',
      'p-slim-black.webp',
      'p-slim-gray.webp',
    ],
  },
  {
    name: 'Purificador de água Soft PLUS',
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-plus/',
    cta: CTA_WA_MESSAGES.products5,
    items: [
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água natural e gelada',
      },
      {
        icon: props => (
          <CheckIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso Comercial e Industrial',
      },
      {
        label: 'Modelo: Plus',
      },
      {
        label: 'Dimensões: 39,5x30,5x37,0 cm',
      },
      {
        label: 'Peso: 13,5 kg',
      },
      {
        label: 'Armazenamento de água gelada: 2,0 litros',
      },
      {
        label: 'Água gelada suficiente para atender 30 pessoas',
      },
    ],
    images: [
      'p-slim-white.webp',
      'p-slim-red.webp',
      'p-slim-black.webp',
      'p-slim-gray.webp',
    ],
  },
]

const filters = [
  {
    name: 'Linha residencial',
    src: filtroResidencial,
    cta: CTA_WA_MESSAGES.filter1,
    desc: `Atende casas, condomínios e estabelecimentos que necessitam de água filtrada em todos os pontos de uso.
    Possui diversos modelos, com peso, tamanho e vazão diferenciados para atender a necessidade específica de cada cliente.
    `,
  },
  {
    name: 'Linha Industrial',
    src: filtroIndustrial,
    cta: CTA_WA_MESSAGES.filter2,
    desc: `Desenvolvidos para levar água de alta qualidade para indústrias, estações de tratamento, hospitais, laboratórios  e demais locais que dependem da água de qualidade para
    alcançar resultados excelentes no processo.
    Possui diversos modelos, com peso, tamanho e vazão diferenciados para atender a necessidade específica de cada cliente.`,
  },
  {
    name: 'Válvulas Automatizadas',
    src: filtroAutomatizada,
    cta: CTA_WA_MESSAGES.filter3,
    desc: `Os filtros centrais também podem ser instalados com válvulas automatizadas. Nele você programa as operações de filtragem, retrolavagem e drenagem.
    Otimizando o tempo e o contato manual`,
  },
]

const FeatureSection = props => {
  const [collapsedIndex, setCollapsedIndex] = useState(-1)
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
            Conheça os nossos produtos
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Aqui na{' '}
            <span className="text-blue-700 font-bold">
              Purificadores de Água Timbó,
            </span>{' '}
            nós nos comprometemos em entregar os{' '}
            <span className="text-blue-700 font-medium">melhores serviços</span>{' '}
            aliados aos{' '}
            <span className="text-blue-700 font-medium">melhores produtos</span>{' '}
            do mercado.
          </p>
        </div>

        <div
          className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          id="filtros"
        >
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Filtro Central de Água
            </h3>
            <p className="mt-3 text-lg text-gray-600">
              É um equipamento que retém impurezas e partículas de resíduos
              presentes na água que chega nas torneiras da sua casa ou empresa.
              Seja água da rede pública ou de poços e nascentes. Com o filtro
              você terá mais segurança em consumir a água e consequentemente
              mais qualidade de vida e saúde para toda a sua família.
            </p>

            <h3 className="mt-10 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
              Por que investir em um filtro central de água?
            </h3>
            <div>
              {filterFeatures.map(item => (
                <div key={item.id} className="flex mt-8">
                  <div className="flex">
                    <item.icon
                      className="h-12 w-12 p-3 bg-blue-500 rounded-md text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-base text-gray-500 ml-4">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-10 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
              Você sabia que a água de poço ou nascente pode estar contaminada
              por metais pesados?
            </h3>
            <div>
              <div className="flex mt-8">
                <div className="text-base text-gray-500">
                  <p>
                    Infelizmente é possível que a água do seu poço ou nascente
                    esteja contaminada com metais pesados, dentre eles, o ferro
                    e o manganês. A abundância de ferro é armazenada em órgãos
                    como fígado, coração e pâncreas, onde passa longos períodos
                    despercebido até ocasionar doenças hepáticas graves que só
                    podem ser curadas logo no início dos sintomas, infelizmente
                    isso não acontece na maioria das vezes. Grandes quantidades
                    de ferro no organismo também podem piorar os efeitos do mau
                    colesterol e aumentar os riscos de doenças cardíacas. Mas o
                    problema tem solução. A água de poço ou nascente pode ser
                    tratada para ficar potável através da filtragem. A solução é
                    personalizada de acordo com uma análise físico-química da
                    água.
                  </p>
                </div>
              </div>
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
            <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 px-8 md:px-16">
              {filters.map((p, index) => (
                <div
                  key={p.name}
                  className="flex mt-4 bg-white shadow-xl rounded-xl py-2"
                >
                  <div className="flex mx-8 my-4 flex-col md:flex-row items-center ">
                    <img className={'h-56 w-auto rounded-xl'} src={p.src} />
                    <div className="md:px-8 flex flex-col items-center text-center">
                      <a
                        className="text-lg text-gray-800 hover:text-blue-400 cursor-pointer font-bold"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {p.name}
                      </a>
                      <p className="text-gray-500 pt-4">{p.desc}</p>
                      <a
                        href={getWhatsUrl(p.cta)}
                        className="mt-2 rounded-md shadow-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Agende uma visita gratuita
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

        <div className="relative mt-12 sm:mt-16 lg:mt-24" id="purificadores">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-0 lg:items-center">
            <div className="lg:col-start-2 lg:px-8">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Purificadores de água{' '}
                <span className="text-blue-700">Soft Everest</span>
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                Quer um purificador que seja refrigerado por compressor e com
                baixo consumo de energia? Então o{' '}
                <span className="text-blue-700 font-medium">Soft Everest</span>{' '}
                é para você!
              </p>
              <p className="mt-3 text-lg text-gray-600">
                Produto certificado pelo{' '}
                <span className="text-blue-700 font-medium">INMETRO</span> e com{' '}
                <span className="text-blue-700 font-bold">
                  1 ano de garantia
                </span>{' '}
                o purificador de água{' '}
                <span className="text-blue-700 font-medium">Soft Everest</span>{' '}
                possui filtro de alta eficiência e dupla filtração. Reduz o
                cloro e retém as partículas da água. Suas partes como o bico e a
                pingadeira são removíveis para facilitar a limpeza e o
                abastecimento de recipientes maiores. Possui três opções de
                temperatura da água,{' '}
                <span className="text-blue-300 font-medium">natural</span>,{' '}
                <span className="text-blue-700 font-medium">gelada</span> e{' '}
                <span className="text-blue-500 font-medium">misturada</span>.
                Atende residências e empresas.
              </p>

              <h3 className="mt-10 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
                Por que investir em um purificador de água?
              </h3>
              <dl className="mt-10 space-y-10">
                {purifiersFeatures.map(item => (
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
              {purifiers.map((p, index) => (
                <ProductCard
                  key={p.name}
                  onClickDetails={() => {
                    if (collapsedIndex === index) {
                      setCollapsedIndex(-1)
                    } else {
                      setCollapsedIndex(index)
                    }
                  }}
                  collapsed={collapsedIndex === index}
                  {...p}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
