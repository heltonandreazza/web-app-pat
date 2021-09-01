import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'

const faqs = [
  {
    question:
      'De onde vem o carvão ativado usado para filtragem de água e como ele age?',
    answer:
      'O carvão ativado usado no tratamento da água é de origem vegetal, extraído do coco de babaçu, oriundo de uma palmeira nativa da região norte do Brasil. No tratamento de água ele cumpre a função de adsorvente. Retém em seus poros certos tipos de impurezas, partículas grandes que causam coloração, sabor ou odor indesejável na água. Essas partículas permanecem fixadas ao carvão ativado por forças físicas (aderência).',
  },
  {
    question:
      'Qual o material filtrante utilizado dentro do filtro central para a remoção de sujeira e redução do cloro?',
    answer:
      'Cristais de Quartzo em granulometrias diferenciadas e carvão ativado.',
  },
  {
    question:
      'E se o problema da minha água for contaminação por metais pesados? (ferro e manganês) o filtro central resolve?',
    answer:
      'Resolve sim. Quando há incidência de contaminação por metais pesados na água, além dos cristais de quartzo em granulometrias diferenciadas, uma carga especial é adicionada ao filtro composta por um produto natural denominado greensand, que tem a função de reter e reduzir esses contaminantes da água.',
  },
  {
    question: 'Por que o filtro central me proporciona mais economia?',
    answer:
      'Porque com água filtrada em todos os pontos de uso os seus equipamentos como lavadoras, chuveiros e outras máquinas vão permanecer limpos, sem entupir e danificar. Prorrogando sua vida útil. Você vai economizar também com a limpeza da caixa d’água, que vai permanecer limpa por mais tempo. Além de consumir água limpa, que vai evitar o aparecimento de doenças.',
  },
  {
    question:
      'Quando devo trocar o refil do meu purificador de água Soft Everest?',
    answer:
      'Sua troca é recomendada de 09 a 12 meses de uso, dependendo da qualidade da água recebida.',
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
