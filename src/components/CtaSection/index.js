import React from 'react'
import ctabanner from '../../images/ctabanner.jpeg'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'

const CtaSection = props => {
  return (
    <div className="bg-white" {...props}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Gostou do que viu?</span>
                <span className="block">
                  Então fale com um de nossos consultores!
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                Aqui você é atendido com rapidez e eficiência pelos nossos
                consultores que, assim como a Giovana, são especialistas no
                assunto! 😀
              </p>
              <a
                href={getWhatsUrl(CTA_WA_MESSAGES.ctaBanner1)}
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50 pt-5 md:pt-6"
              >
                Fale conosco
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={ctabanner}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
