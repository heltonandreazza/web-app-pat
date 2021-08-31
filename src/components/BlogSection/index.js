import React from 'react'

const BlogSection = ({ items, ...props }) => {
  return (
    <div
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      {...props}
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Nos siga no Instagram
          </h2>
          <a
            className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4 text-blue-400 hover:text-blue-500 underline"
            href="https://www.instagram.com/purificadoresdeaguatimbo/"
            target="_blank"
            rel="noreferrer"
          >
            @purificadoresdeaguatimbo
          </a>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-0 lg:grid-cols-3 lg:max-w-none">
          {items?.map(
            ({
              id,
              media_url,
              media_type,
              permalink,
              timestamp,
              caption,
              username,
              thumbnail_url,
            }) => (
              <a
                key={id}
                className="flex flex-col shadow-lg overflow-hidden"
                href={permalink}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex-shrink-0">
                  <div className="relative h-auto w-full">
                    <img
                      className="h-full w-full object-cover"
                      src={thumbnail_url || media_url}
                      alt=""
                    />
                    <div className="absolute inset-0 index-10 bg-blue-500 opacity-0 hover:opacity-60 cursor-pointer h-full w-full">
                      <p className="text-white font-medium text-center px-16 py-14 opacity-100">
                        {`${caption?.substr(0, 350)}...`}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
