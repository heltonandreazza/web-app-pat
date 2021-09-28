import React from 'react'
import { getWhatsUrl } from '../../utils'
import Slider from '../Slider'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
  collapsed,
  onClickDetails,
  items,
  images,
  srcWrapperClassName,
  srcClassName,
  children,
}) => {
  const isNotMobile = useMediaQuery('(min-width:640px)')
  return (
    <div className="flex items-center px-4 md:px-14 mt-4">
      <div className="flex flex-col p-4 md:p-0 bg-white shadow-xl rounded-xl w-full h-auto">
        <div className="flex flex-col md:flex-row items-center ">
          {images?.length && (
            <div className={'relative h-40 w-40'}>
              <Slider
                style={{
                  height: '10rem',
                  width: '10rem',
                  'border-radius': '0.75rem',
                }}
                images={images}
              />
            </div>
          )}
          {src && (
            <div className={`flex h-40 w-auto ${srcWrapperClassName}`}>
              <img
                className={`h-40 w-auto rounded-xl ${srcClassName}`}
                src={src}
              />
            </div>
          )}
          <div className="flex flex-col items-center">
            {src2 && <img className="hidden md:flex h-20" src={src2} />}
          </div>
          <div className="md:pl-8 flex flex-col items-center">
            <a
              className="text-lg text-gray-800 hover:text-blue-400 cursor-pointer font-bold"
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
            {children}
            <div className="flex">
              <a
                href={getWhatsUrl(cta)}
                className="mt-2 rounded-md shadow-md bg-blue-500 hover:bg-blue-600 px-4 py-2 pt-4 text-white"
                target="_blank"
                rel="noreferrer"
              >
                Eu quero esse
              </a>
              {items && (
                <a
                  className="mt-2 ml-2 rounded-md shadow-md bg-blue-100 hover:bg-blue-200 cursor-pointer px-4 py-2 pt-4 text-blue-600"
                  onClick={onClickDetails}
                >
                  {`${collapsed ? '-' : '+'} Detalhes`}
                </a>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            'overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 hover:scrollbar-thumb-blue-400 scrollbar-track-transparent'
          }
          style={{
            transition: 'height 500ms',
            height: collapsed ? (isNotMobile ? '10rem' : '20rem') : '0rem',
          }}
        >
          {collapsed && (
            <div className="pt-8 px-0 md:py-0 px-2">
              <ul className="flex flex-col md:flex-row flex-wrap md:items-center justify-center">
                {items?.map(item => (
                  <li key={item.label}>
                    <span className="text-medium mx-2 md:mx-4 my-0.5 text-gray-500 flex items-center">
                      {item.icon && <item.icon />}
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
