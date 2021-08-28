import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'

const faqs = [
  {
    question: 'O que é um filtro central?',
    answer:
      'O filtro central é um dispositivo que retém partículas de resíduos e de impurezas presentes na água que vem da rede pública, da nascente ou do poço. Ele te proporciona mais segurança, higiene e saúde, com água de melhor qualidade em todos os pontos de uso da sua casa, empresa, indústria ou estabelecimento.',
  },
  {
    question: 'Qual o material filtrante utilizado dentro do filtro central?',
    answer: ' Cristais de Quartzo e Carvão ativado. ',
  },
  {
    question: 'Como o filtro central funciona?',
    answer:
      ' O Filtro Central é instalado após o hidrômetro, sendo assim, toda a água que abastece o estabelecimento é filtrada antes de ir para caixa d’água. Usado também para águas que vêm de poços ou de bombas.',
  },

  {
    question: 'Por que o filtro central me proporciona mais economia?',
    answer:
      ' Porque com água filtrada em todos os pontos de uso os seus equipamentos como lavadoras, chuveiros e outras máquinas vão permanecer limpos, sem entupir e danificar. Prorrogando sua vida útil. Você vai economizar também com a limpeza da caixa d’água, que vai permanecer limpa por mais tempo. Além de consumir água limpa, que vai evitar o aparecimento de doenças.',
  },

  {
    question:
      'Quais as vantagens de investir em um purificador de água Soft Everest?',
    answer:
      ' O purificador de água Soft Everest possui filtro de alta eficiência e dupla filtração. Garante redução de cloro, oferecendo água livre de partículas, bico e pingadeira removíveis que facilitam a limpeza e o abastecimento de recipientes maiores. Tem três opções de temperatura – natural e gelada e misturada (fresca). Baixo consumo de energia e alta capacidade de refrigeração, porque é refrigerado por compressor. Com cores e modelos variados atende ambientes comerciais e residenciais. Produto certificado pelo INMETRO e com 1 ano de garantia.',
  },

  {
    question:
      'Quando devo trocar o refil do meu purificador de água Soft Everest?',
    answer:
      'a troca é recomendada de 09 a 12 meses de uso, dependendo da qualidade da água recebida.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-xl font-medium text-gray-600 sm:text-xl">
            Não encontrou a sua resposta? Fale com um de nossos{' '}
            <a
              href={getWhatsUrl(CTA_WA_MESSAGES.ctaFaq1)}
              className="text-blue-400 underline"
            >
              consultores
            </a>
            . 😀
          </p>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map(faq => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform',
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
