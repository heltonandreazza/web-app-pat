import { CheckIcon, LightningBoltIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import cores3 from '../../images/cores3.png'
import cores4 from '../../images/cores4.png'
import filtroCentral from '../../images/filtroCentral.png'
import pBabyWhite from '../../images/p-baby-white.webp'
import pFitGray from '../../images/p-fit-gray.webp'
import pPlusGray from '../../images/p-plus-gray.webp'
import pSlimRed from '../../images/p-slim-red.webp'
import pStarBlack from '../../images/p-star-black.webp'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import ProductCard from '../ProductCard'

const filterFeatures = [
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

const purifiersFeatures = [
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

const purifiers = [
  {
    name: 'Purificador de água Soft BABY',
    src: pBabyWhite,
    src2: cores3,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-baby/',
    cta: CTA_WA_MESSAGES.products1,
    items: [
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: '',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso comercial',
      },
      {
        label: 'Peso: 1,75 kg',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Armazenamento',
      },
      {
        label: 'Dimensões: 28,0x19,5x18,5 cm',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Temperatura média da saída de água',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Capacidade de refrigeração',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Consumo de energia',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Potência',
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
    src: pFitGray,
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
        label: '',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso comercial',
      },
      {
        label: 'Peso: 10,5 kg',
      },
      {
        label: 'Armazenamento: 1,2 litros',
      },
      {
        label: 'Dimensões: 28,0x30,5x37,0 cm',
      },
      {
        label: 'Temperatura média da saída de água: 8ºC',
      },
      {
        label: 'Capacidade de refrigeração: 1,303 l/h',
      },
      {
        label: 'Consumo: 4,950 kwh/mês',
      },
      {
        label: 'Potência: 100w',
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
    src: pSlimRed,
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
        label: '',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso comercial',
      },
      {
        label: 'Peso: 11,0 kg',
      },
      {
        label: 'Armazenamento: 1,8 litros',
      },
      {
        label: 'Dimensões: 36,0x27,5x37,0 cm',
      },
      {
        label: 'Temperatura média da saída de água: 8ºC',
      },
      {
        label: 'Capacidade de refrigeração: 1,000 l/h',
      },
      {
        label: 'Consumo: 5,100 kwh/mês',
      },
      {
        label: 'Potência: 100w',
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
    src: pStarBlack,
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
        label: '',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso comercial',
      },
      {
        label: 'Peso: 12,0 kg',
      },
      {
        label: 'Armazenamento: 2,0 litros',
      },
      {
        label: 'Dimensões: 39,5x30,5x37,0 cm',
      },
      {
        label: 'Temperatura média da saída de água: 8ºC',
      },
      {
        label: 'Capacidade de refrigeração: 0,925 l/h',
      },
      {
        label: 'Consumo: 5,460 kwh/mês',
      },
      {
        label: 'Potência: 100w',
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
    src: pPlusGray,
    src2: cores4,
    href: 'https://www.softpurificadores.com.br/purificadores/soft-plus/',
    cta: CTA_WA_MESSAGES.products5,
    items: [
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Água gelada',
      },
      {
        icon: props => (
          <XIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
            {...props}
          />
        ),
        label: 'Uso comercial',
      },
      {
        label: 'Peso: 13,5 kg',
      },
      {
        label: 'Armazenamento: 2,0 litros',
      },
      {
        label: 'Dimensões: 39,5x30,5x37,0 cm',
      },
      {
        label: 'Temperatura média da saída de água: 8ºC',
      },
      {
        label: 'Capacidade de refrigeração: 1,895 l/h',
      },
      {
        label: 'Consumo: 6,450 kwh/mês',
      },
      {
        label: 'Potência: 140w',
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
              {filterFeatures.map(item => (
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
