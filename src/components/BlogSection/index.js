import React, { useEffect } from 'react'

const InstagramEmbedPost = ({ postUrl }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.instagram.com/embed.js'
    document.body.appendChild(script)
  }, [])

  return (
    <blockquote
      className={`instagram-media bg-white border-0 rounded-md shadow-md m-1 max-w-lgp-0 flex flex-1`}
      style={{
        minHeight: '1084px',
      }}
      data-instgrm-captioned
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
    >
      <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white text-center no-underline w-full p-2 text-blue-500 font-semibold"
      >
        View this post on Instagram
      </a>
    </blockquote>
  )
}

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
        <a
          className="text-center no-underline"
          href="https://www.instagram.com/purificadoresdeaguatimbo/?utm_source=site"
          target="_blank"
        >
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nos siga no Instagram
          </h2>
          <div className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4 text-blue-400 hover:text-blue-500 underline">
            @purificadoresdeaguatimbo
          </div>
        </a>
        <div className="desktop hidden md:flex gap-8 mt-8">
          <InstagramEmbedPost
            postUrl={
              'https://www.instagram.com/p/DFbEdZ7oI3D/?utm_source=ig_embed&amp;utm_campaign=loading'
            }
          />
          <InstagramEmbedPost
            postUrl={
              'https://www.instagram.com/p/DFu3kGhNWYS/?utm_source=ig_embed&amp;utm_campaign=loading'
            }
          />
          <InstagramEmbedPost
            postUrl={
              'https://www.instagram.com/p/DEZoeuNxFx7/?utm_source=ig_embed&amp;utm_campaign=loading'
            }
          />
        </div>
        <div className="mobile flex md:hidden flex-col mt-8">
          <InstagramEmbedPost
            postUrl={
              'https://www.instagram.com/p/DFbEdZ7oI3D/?utm_source=ig_embed&amp;utm_campaign=loading'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default BlogSection
