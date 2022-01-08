import React from 'react'

const Component = () => {
  return (
    <div>
      <div className="block-container w-full bg-top bg-cover">
        <div
          className="bg-white max-w-screen-2xl md:flex-row flex w-full bg-top bg-cover flex-col justify-between mt-auto mr-auto
     mb-auto ml-auto pt-4 pr-8 pb-4 pl-8"
        >
          <div
            className="bg-white md:m-0 flex bg-top bg-cover flex-row justify-between items-center mt-2 mb-2 pr-0
      "
          >
            <a target="_blank" href="#">
              <div
                className="self-border-float-font-semibold text-base h-undefined
        tracking-leading-mr-6 opacity-order-overflow-pt-0
         text-center w-break-bg-text-gray-600 shadow-cursor-pointer"
                style={{ fontFamily: 'Raleway' }}
              >
                Product
              </div>
            </a>
            <a target="_blank" href="#">
              <div
                className="self-border-float-font-semibold text-base h-undefined
        tracking-leading-mr-6 opacity-order-overflow-pt-0
         text-center w-break-bg-text-gray-600 shadow-cursor-pointer"
                style={{ fontFamily: 'Raleway' }}
              >
                Features
              </div>
            </a>
            <a target="_blank" href="#">
              <div
                className="self-border-float-font-semibold text-lg h-undefined
        tracking-leading-opacity-order-overflow-pt-0
         text-center w-break-bg-text-gray-600 shadow-cursor-pointer"
                style={{ fontFamily: 'Raleway' }}
              >
                Pricing
              </div>
            </a>
          </div>
          <div
            className="bg-white order-first md:order-none flex bg-top bg-cover flex-row justify-center items-center mr-0
      "
          >
            <img
              src="https://res.cloudinary.com/macxenon/image/upload/v1626954201/logo_id1zsg.png"
              className="w-12 md:w-16 mr-0
      "
            />
          </div>
          <div
            className="md:justify-start flex bg-top bg-cover justify-center items-center pb-0
      "
          >
            <button
              className="h-9 w-24 rounded-lg mr-6  text-center text-base font-normal
      flex items-center justify-center border-2 bg-white text-gray-600 border-white"
              style={{ fontFamily: 'Arial' }}
            >
              Sign in
            </button>
            <button
              className="h-9 w-24 rounded-lg hover:bg-blue-900 hover:border-blue-900 pr-0
       text-center text-base font-normal flex items-center justify-center border-2 bg-blue-700 text-white
      border-blue-700"
              style={{ fontFamily: 'Arial' }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="block-container bg-top bg-cover"></div>
      <div className="block-container bg-white bg-top bg-cover">
        <div className="bg-top bg-cover ">
          Click here and add elements through the left sidebar
        </div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div
          className="bg-white max-w-screen-2xl flex bg-top bg-cover flex-col items-center mr-auto ml-auto pt-16 pr-4
     pb-16 pl-4 relative lg:flex-row lg:py-32 xl:py-48 md:px-8"
        >
          <div
            className="flex w-full h-full bg-top bg-cover justify-center items-center 
      overflow-hidden lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
          >
            <img
              src="https://i.imgur.com/DBK8aAb.png"
              className="h-auto w-full  object-contain
      object-top lg:w-auto lg:h-full"
            />
          </div>
          <div
            className="flex bg-top bg-cover justify-end mr-auto ml-auto  relative max-w-xl xl:pr-32
      lg:max-w-screen-xl"
          >
            <div className="bg-top bg-cover mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="bg-top bg-cover mb-6  max-w-xl">
                <p
                  className="inline-block font-semibold text-xs tracking-wider mb-4 pt-1 pr-3 pb-1 pl-3 uppercase
         bg-pink-500 text-pink-200 rounded-2xl"
                >
                  Brand new
                </p>
                <div
                  className="text-gray-900 bg-top bg-cover mb-6  max-w-lg sm:text-4xl
         sm:leading-none"
                >
                  <p
                    className="font-bold text-3xl tracking-tight  text-gray-900 sm:text-4xl
          sm:leading-none"
                  >
                    Write anything and start
                  </p>
                  <p
                    className="inline-block font-bold text-3xl tracking-tight mr-2  text-gray-900
          sm:text-4xl sm:leading-none"
                  >
                    being
                  </p>
                  <p
                    className="inline-block font-bold text-3xl tracking-tight  text-blue-700
          sm:text-4xl sm:leading-none"
                  >
                    creative
                  </p>
                </div>
                <p className="text-base  text-gray-700 md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="flex bg-top bg-cover flex-col  md:flex-row">
                <input
                  type="text"
                  id="73484fdc-6e8c-445c-b65c-b5aa5b63a0e2"
                  className="h-12 w-full rounded-md mb-2 pt-3 pr-4 pb-3 pl-4
        text-xs font-normal shadow-sm border-2 bg-white text-white border-gray-300 md:mr-2 focus:border-blue-700
        focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none"
                  placeholder="Email
        Address"
                  style={{ fontFamily: 'Raleway' }}
                />
              </div>
              <div className="flex bg-top bg-cover items-center mt-4 ">
                <button
                  className="h-12
        rounded-lg mr-6 pr-6 pl-6 text-medium font-semibold tracking-wide shadow-md inline-flex
        items-center justify-center bg-blue-700 text-white transition duration-200 hover:bg-blue-900 focus:shadow-outline
        focus:outline-none"
                  style={{ fontFamily: 'Arial' }}
                >
                  Get Early Access
                </button>
                <button
                  className="h-12 rounded-lg mr-6
        pr-6 pl-6 text-medium font-semibold tracking-wide shadow-md inline-flex items-center
        justify-center bg-transparent text-blue-700 transition duration-200 hover:bg-blue-50 focus:shadow-outline
        focus:outline-none"
                  style={{ fontFamily: 'Arial' }}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover ">
          <div
            className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mr-auto mb-0
      ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <div className="sm:p-16 bg-top bg-cover shadow-xl pt-8 pr-8 pb-8 pl-8">
              <div className="lg:flex-row flex bg-top bg-cover flex-col ">
                <div className="lg:lg:w-1/2 lg:pr-5 bg-top bg-cover mb-6 ">
                  <div className="bg-top bg-cover ">
                    <p
                      className="font-sans sm:text-4xl block font-bold text-3xl tracking-tight leading-6 pr-0
            text-gray-900"
                    >
                      Improve your day
                    </p>
                    <p
                      className="font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight pt-0
            text-gray-900"
                    >
                      to the MAX with
                    </p>
                    <p
                      className="font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight pt-0
            text-blue-700"
                    >
                      Music
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-top bg-cover ">
                  <p className="text-base mb-4  text-left text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <a target="_blank">
                    <div
                      className="items-center transition-colors duration-200 hover:text-blue-900 self-border-flex
           float-font-semibold text-h-tracking-leading-mt-0
           opacity-order-overflow- text-center w-3/12
           break-bg-text-blue-700 shadow-cursor-pointer"
                    >
                      Learn more
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-white bg-top bg-cover">
        <div className="bg-top bg-cover ">
          <div
            className="bg-white bg-top bg-cover mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 lg:max-w-screen-xl sm:max-w-xl
      md:max-w-full md:px-24 lg:px-8 lg:py-20"
          >
            <div className="grid bg-top bg-cover  grid-cols-2 row-gap-8 md:grid-cols-4">
              <div className="text-center bg-top bg-cover  md:border-r">
                <p
                  className="font-bold text-4xl mb-2  text-center text-blue-700 lg:text-5xl
         xl:text-6xl"
                >
                  144K
                </p>
                <p
                  className="font-medium text-sm tracking-widest  text-center uppercase
         text-gray-800 lg:text-base"
                >
                  Downloads
                </p>
              </div>
              <div className="text-center bg-top bg-cover  md:border-r">
                <p
                  className="font-bold text-4xl mb-2  text-center text-blue-700 lg:text-5xl
         xl:text-6xl"
                >
                  12.9K
                </p>
                <p
                  className="font-medium text-sm tracking-widest  text-center uppercase
         text-gray-800 lg:text-base"
                >
                  Subscribers
                </p>
              </div>
              <div className="text-center bg-top bg-cover  md:border-r">
                <p
                  className="font-bold text-4xl mb-2  text-center text-blue-700 lg:text-5xl
         xl:text-6xl"
                >
                  48.3K
                </p>
                <p
                  className="font-medium text-sm tracking-widest  text-center uppercase
         text-gray-800 lg:text-base"
                >
                  Users
                </p>
              </div>
              <div className="text-center bg-top bg-cover  md:border-r">
                <p
                  className="font-bold text-4xl mb-2  text-center text-blue-700 lg:text-5xl
         xl:text-6xl"
                >
                  24.5K
                </p>
                <p
                  className="font-medium text-sm tracking-widest  text-center uppercase
         text-gray-800 lg:text-base"
                >
                  Cookies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-gray-900 bg-top bg-cover">
        <div className="bg-gray-900 bg-top bg-cover ">
          <div
            className="lg:max-w-screen-xl sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mr-auto mb-0
      ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <p
              className="tracking-wide uppercase sm:text-center font-semibold text-xs mb-2 
       text-gray-300"
            >
              20 Nov 2020
            </p>
            <div
              className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl bg-top bg-cover mr-auto mb-5 ml-auto pb-0
       "
            >
              <div className="bg-top bg-cover mb-4 ">
                <div className="inline-block bg-top bg-cover ">
                  <p
                    className="Article max-w-lg font-sans tracking-tight transition-colors duration-200 hover:text-blue-900 sm:text-4xl
          font-extrabold text-3xl leading-none  text-white"
                  >
                    Improve your day to the MAX with Music
                  </p>
                </div>
              </div>
              <p className="md:text-lg text-base  text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
            <div className="sm:text-center bg-top bg-cover mb-10 ">
              <div className="Author inline-block mb-1 bg-top bg-cover ">
                <img
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="h-10 w-10 rounded-full object-cover  shadow-sm"
                  alt="avatar"
                />
              </div>
              <div className="bg-top bg-cover ">
                <p
                  className="Author transition-colors duration-200 hover:text-blue-900 font-semibold text-2xl pt-0
          text-white"
                >
                  Vasile Melinte
                </p>
                <p className="font-medium text-sm leading-4  text-gray-400">
                  Author
                </p>
              </div>
            </div>
            <div className="sm:text-center bg-top bg-cover ">
              <p
                className="items-center transition-colors duration-200 hover:text-blue-900 inline-flex font-semibold text-2xl mt-0
         text-blue-500"
              >
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-gray-900 bg-top bg-cover">
        <div className="bg-gray-900 bg-top bg-cover "></div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover ">
          <div
            className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mr-auto mb-0
      ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <div
              className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 bg-top bg-cover mr-auto mb-10 ml-auto pt-0
       "
            >
              <div className="bg-top bg-cover ">
                <p
                  className="uppercase rounded-full inline-block font-semibold text-xs tracking-wider mb-4 pt-3 pr-3
         pb-3 pl-3 bg-pink-500 text-pink-200"
                >
                  Our Pricing
                </p>
              </div>
              <div
                className="max-w-lg font-sans sm:text-4xl md:mx-auto text-gray-900 bg-top bg-cover mr-auto mb-6 ml-auto pt-0
        "
              >
                <div className="bg-top bg-cover ">
                  <p className="relative inline-block text-2xl ">
                    <svg
                      viewbox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28
          lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </p>
                  <p
                    className="relative font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight mb-0
           text-gray-900"
                  >
                    Affordable Pricing
                  </p>
                </div>
                <p
                  className="font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight pt-0
         "
                >
                  Focus on growing your business
                </p>
              </div>
              <p className="md:text-lg text-base  text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
            <div
              className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto bg-top bg-cover mr-auto ml-auto pr-0
       "
            >
              <div
                className="bg-white transition-shadow duration-300 border rounded sm:items-center hover:shadow flex bg-top bg-cover
        flex-col justify-between shadow-sm pt-8 pr-8 pb-8 pl-8"
              >
                <div className="text-center bg-top bg-cover ">
                  <p className="font-semibold text-lg ">Start</p>
                  <div className="flex bg-top bg-cover justify-center items-center mt-2 ">
                    <p className="font-bold text-5xl mr-1 ">Free</p>
                  </div>
                  <div className="space-y-2 bg-top bg-cover mt-2 ">
                    <p className="text-2xl  text-gray-700">
                      10 deploys per day
                    </p>
                    <p className="text-2xl  text-gray-700">10 GB of storage</p>
                    <p className="text-2xl  text-gray-700">20 domains</p>
                  </div>
                </div>
                <div className="bg-top bg-cover ">
                  <button
                    className="h-12 w-full transition duration-200 rounded hover:bg-gray-900 focus:shadow-outline
          focus:outline-none mt-6 pr-6 pl-6 font-medium tracking-wide shadow-md inline-flex
          items-center justify-center bg-gray-800 text-white"
                    style={{ fontFamily: 'Arial' }}
                  >
                    Start for free
                  </button>
                  <p
                    className="max-w-xs sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto text-xs mt-6 pb-0
           text-gray-600"
                  >
                    Sed ut unde omnis iste natus accusantium doloremque.
                  </p>
                </div>
              </div>
              <div
                className="bg-white relative transition-shadow duration-300 border rounded sm:items-center hover:shadow
        border-purple-700 flex bg-top bg-cover flex-col justify-between shadow-sm pt-8 pr-8 pb-8
        pl-8"
              >
                <div
                  className="absolute inset-x-0 top-0 flex bg-top bg-cover justify-center -mt-3 pb-0
         "
                >
                  <p
                    className="uppercase rounded inline-block font-medium text-xs tracking-wider pt-1 pr-3 pb-1
          pl-3 bg-blue-700 text-white"
                  >
                    Most Popular
                  </p>
                </div>
                <div className="text-center bg-top bg-cover ">
                  <p className="font-semibold text-lg ">Pro</p>
                  <div className="flex bg-top bg-cover justify-center items-center mt-2 ">
                    <p className="font-bold text-5xl mr-1 ">$38</p>
                    <p className="text-2xl  text-gray-700">/ mo</p>
                  </div>
                  <div className="space-y-2 bg-top bg-cover mt-2 ">
                    <p className="text-2xl  text-gray-700">
                      200 deploys per day
                    </p>
                    <p className="text-2xl  text-gray-700">80 GB of storage</p>
                    <p className="text-2xl  text-gray-700">Global CDN</p>
                  </div>
                </div>
                <div className="bg-top bg-cover ">
                  <button
                    className="h-12 w-full transition duration-200 rounded hover:bg-blue-900 focus:shadow-outline
          focus:outline-none mt-6 pr-6 pl-6 font-medium tracking-wide shadow-md inline-flex
          items-center justify-center bg-blue-700 text-white"
                    style={{ fontFamily: 'Arial' }}
                  >
                    Buy Pro
                  </button>
                  <p
                    className="max-w-xs sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto text-xs mt-6 pb-0
           text-gray-600"
                  >
                    Sed ut unde omnis iste natus accusantium doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-white bg-top bg-cover">
        <section
          className="bg-gradient-to-b from-gray-100 to-white w-full bg-top bg-cover pb-0
     "
        >
          <div
            className="text-left md:text-center md:w-3/4 lg:w-2/4 w-full bg-top bg-cover mr-auto ml-auto pt-20 pr-4
      pb-20 pl-4"
          >
            <p className="font-semibold text-base mb-2  text-blue-700">
              Start your free trial now
            </p>
            <p className="font-extrabold text-3xl mb-6 ">
              Sign up for a free account to organize your customer feedback
            </p>
            <div className="space-x-0 md:space-x-2 bg-top bg-cover -mt- -mr- -ml- ">
              <div
                className="bg-blue-700 hover:bg-blue-900 sm:w-auto sm:text-white inline-flex w-full bg-top bg-cover
        justify-center items-center rounded mb-2 pt-2 pr-4 pb-2 pl-4"
              >
                <p className="inline-flex text-2xl ">Get Started</p>
                <p className="inline-flex text-2xl h-4 ml-1  w-4">
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293
         3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1
         1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <div
                className="bg-gray-100 hover:bg-gray-200 sm:w-auto sm:text-gray-800 inline-flex w-full bg-top bg-cover
        justify-center items-center rounded mb-2 pt-2 pr-4 pb-2 pl-4"
              >
                <p className="inline-flex text-2xl ">Book a demo</p>
                <p className="inline-flex text-2xl h-4 ml-1  w-4">
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.672
         1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0
         00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071
         7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0
         001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
          <div
            className="text-left w-full bg-top bg-cover mr-auto ml-auto  md:w-3/5 lg:w-2/5
      md:text-center"
          >
            <div
              className="flex bg-top bg-cover justify-center items-center mb-6  avatar avatar-lg
       md:mx-auto"
            >
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-24 w-24  object-cover"
              />
            </div>
            <p
              className="font-bold text-xl mb-6  text-center text-gray-900 md:leading-tight
       md:text-3xl"
            >
              “With their reliable and developer-friendly tools, our engineering
              team is freed up to focus on product and customer experiences.”
            </p>
            <p className="font-bold text-xs tracking-widest mb-6  text-center text-blue-700">
              “With their reliable and developer-friendly tools, our engineering
              team is freed up to focus on product and customer experiences.”
            </p>
            <img
              src="https://kutty.netlify.app/logos/google.svg"
              className="h-8  md:mx-auto
       object-contain"
            />
          </div>
        </div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover ">
          <div
            className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mr-auto mb-0
      ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <div
              className="gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 grid bg-top bg-cover pb-0
       "
            >
              <div className="text-center sm:px-0 bg-top bg-cover pr-12 pl-12">
                <p
                  className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
          w-10"
                >
                  <svg
                    viewbox="0 0 512 512"
                    fill="currentColor"
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m511.4
         38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545
         54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154
         77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447
         2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686
         2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877
         3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
         17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791
         41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927
         91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
         7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
         11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
         11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
         91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756
         34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276
         104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104
         112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
                    />
                    <path
                      d="m350.721 236.243c19.202-.002
         38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
         21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
         32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
         21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499
         13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
         0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
                    />
                    <path
                      d="m15.301 421.938c3.839 0 7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972
         48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
                    />
                    <path
                      d="m119.761
         392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767
         4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"
                    />
                    <path
                      d="m143.429
         437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
                    />
                  </svg>
                </p>
                <p
                  className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 pb-0
         "
                >
                  Fearless
                </p>
                <p className="text-sm mb-2  text-gray-700">
                  I will remember and recover, not forgive and forget.
                </p>
              </div>
              <div className="text-center sm:px-0 bg-top bg-cover pr-12 pl-12">
                <p
                  className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
          w-10"
                >
                  <svg
                    viewbox="0 0 512 512"
                    fill="currentColor"
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m511.4
         38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545
         54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154
         77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447
         2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686
         2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877
         3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
         17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791
         41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927
         91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
         7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
         11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
         11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
         91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756
         34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276
         104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104
         112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
                    />
                    <path
                      d="m350.721 236.243c19.202-.002
         38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
         21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
         32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
         21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499
         13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
         0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
                    />
                    <path
                      d="m15.301 421.938c3.839 0 7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972
         48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
                    />
                    <path
                      d="m119.761
         392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767
         4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"
                    />
                    <path
                      d="m143.429
         437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
                    />
                  </svg>
                </p>
                <p
                  className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 pb-0
         "
                >
                  Fearless
                </p>
                <p className="text-sm mb-2  text-gray-700">
                  I will remember and recover, not forgive and forget.
                </p>
              </div>
              <div className="text-center sm:px-0 bg-top bg-cover pr-12 pl-12">
                <p
                  className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
          w-10"
                >
                  <svg
                    viewbox="0 0 512 512"
                    fill="currentColor"
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m511.4
         38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545
         54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154
         77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447
         2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686
         2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877
         3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
         17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791
         41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927
         91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
         7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
         11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
         11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
         91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756
         34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276
         104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104
         112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
                    />
                    <path
                      d="m350.721 236.243c19.202-.002
         38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
         21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
         32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
         21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499
         13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
         0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
                    />
                    <path
                      d="m15.301 421.938c3.839 0 7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972
         48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
                    />
                    <path
                      d="m119.761
         392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767
         4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"
                    />
                    <path
                      d="m143.429
         437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
                    />
                  </svg>
                </p>
                <p
                  className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 pb-0
         "
                >
                  Fearless
                </p>
                <p className="text-sm mb-2  text-gray-700">
                  I will remember and recover, not forgive and forget.
                </p>
              </div>
              <div className="text-center sm:px-0 bg-top bg-cover pr-12 pl-12">
                <p
                  className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
          w-10"
                >
                  <svg
                    viewbox="0 0 512 512"
                    fill="currentColor"
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m511.4
         38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545
         54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154
         77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447
         2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686
         2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877
         3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
         17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791
         41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927
         91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
         7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
         11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
         11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
         91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756
         34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276
         104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104
         112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
                    />
                    <path
                      d="m350.721 236.243c19.202-.002
         38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
         21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
         32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
         21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499
         13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
         0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
                    />
                    <path
                      d="m15.301 421.938c3.839 0 7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972
         48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
                    />
                    <path
                      d="m119.761
         392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767
         4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"
                    />
                    <path
                      d="m143.429
         437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464
         10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
                    />
                  </svg>
                </p>
                <p
                  className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 pb-0
         "
                >
                  Fearless
                </p>
                <p className="text-sm mb-2  text-gray-700">
                  I will remember and recover, not forgive and forget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-white bg-top bg-cover">
        <div className="bg-top bg-cover ">
          <div className="max-w-7xl bg-top bg-cover mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
            <div
              className="space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 w-full bg-top bg-cover mr-auto ml-auto pt-0
       "
            >
              <p className="text-center font-semibold text-4xl mb-4  text-gray-900">
                Login
              </p>
              <div className="space-y-2 border-b border-gray-200 bg-top bg-cover pb-6 ">
                <div
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white inline-flex w-full bg-top bg-cover
         justify-center items-center rounded-md pt-3 pb-3 "
                >
                  <p className="text-2xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path
                        d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28
          c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233
          c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934
          C20.485,11.453,20.404,10.884,20.283,10.356z"
                      />
                    </svg>
                  </p>
                  <p className="text-2xl ">Continue with Google</p>
                </div>
                <div
                  className="bg-black cursor-pointer text-white inline-flex w-full bg-top bg-cover justify-center items-center
         rounded-md mt-2 pt-3 pb-3 "
                >
                  <p className="text-2xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path
                        d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592
          c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371
          c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764
          c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447
          c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549
          c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384 c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023 c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38 c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36 c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435 C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z"
                      />
                    </svg>
                  </p>
                  <p className="text-2xl ">Continue with Apple</p>
                </div>
              </div>
              <div className="space-y-4 bg-top bg-cover ">
                <div className="block bg-top bg-cover ">
                  <p className="block font-medium text-xs mt-4 mb-1  text-gray-700">
                    Your Email
                  </p>
                  <input
                    type="email"
                    id="7bb072cb-97c3-4abf-9419-670790de6b54"
                    className="border-2 hover:border-purple-700 w-full
          rounded-md pt-2 pr-3 pb-2 pl-3"
                    placeholder="Ex. james@bond.com"
                  />
                </div>
                <div className="block bg-top bg-cover ">
                  <p className="block font-medium text-xs mt-4 mb-1  text-gray-700">
                    Your Password
                  </p>
                  <input
                    type="password"
                    id="a8bdd709-8fee-4a14-8ef9-8831da6a5261"
                    className="border-2 hover:border-purple-700 w-full
          rounded-md pt-2 pr-3 pb-2 pl-3"
                    placeholder="••••••••"
                  />
                </div>
                <input
                  type="submit"
                  id="8e43a0c8-d21d-4a8c-8cf9-9d84f45a1fce"
                  className="hover:bg-blue-900 w-full rounded-md mt-4 mr-0
         pt-2.5 pr-3.5 pb-2.5 pl-3.5 bg-blue-700 text-white"
                  placeholder="Add text here..."
                />
              </div>
              <div className="text-center bg-top bg-cover mt-3 mb-2 ">
                <a target="_blank" href="#">
                  <div
                    className="underline hover:text-purple-700 self-border-float-undefined
          font-text-sm h-tracking-leading-opacity-undefined
          order-overflow- text-w-break-bg-undefined
          text-gray-700 shadow-cursor-pointer"
                  >
                    Forgot password
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover ">
          <div className="max-w-7xl bg-top bg-cover mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
            <p
              className="md:text-4xl font-bold text-3xl tracking-tight mb-3  text-center
       text-gray-900"
            >
              Trusted by 5200+, built by 8
            </p>
            <p className="text-lg mb-16  text-center text-gray-600">
              Organizations of all sizes trust HelloNext to manage customer
              feedback
            </p>
            <div
              className="grid-cols-2 gap-16 text-center lg:grid-cols-6 grid bg-top bg-cover pb-16
       "
            >
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/001-adobe_q9fyz4.svg"
                  className="h-full h-16 mt-0
         block object-contain"
                  alt="Logo 1"
                />
              </div>
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/002-airbnb_aotwnn.svg"
                  className="h-full h-16 mt-0
         block object-contain"
                  alt="Logo 2"
                />
              </div>
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/003-amd_fhisin.svg"
                  className="h-full h-16 mr-0
         block object-contain"
                  alt="Logo 3"
                />
              </div>
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/004-android_a6i0c7.svg"
                  className="h-full h-16 mt-0
         block object-contain"
                  alt="Logo 4"
                />
              </div>
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/007-ati_hhzips.svg"
                  className="h-full h-16 mr-0
         block object-contain"
                  alt="Logo 5"
                />
              </div>
              <div className="flex bg-top bg-cover justify-center items-center ">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/005-apple_zgdckn.svg"
                  className="h-full h-16 mt-0
         block object-contain"
                  alt="Logo 6"
                />
              </div>
            </div>
            <div className="text-center bg-top bg-cover ">
              <div
                className="bg-gray-200 transition cursor-pointer hover:bg-gray-400 text-gray-900 inline-flex bg-top bg-cover
        justify-center items-center rounded-md pt-2 pr-3 pb-2 pl-3"
              >
                <p className="font-semibold text-2xl ">See our Testimonials</p>
                <p className="items-center justify-center inline-flex text-2xl h-10  w-10">
                  <svg viewbox="0 0 20 20" fill="currentColor" className="ml-3">
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4
         4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-white bg-top bg-cover">
        <div
          className="sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 w-full bg-top bg-cover mr-auto ml-auto pt-16
     pr-4 pb-16 pl-4"
        >
          <div
            className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 bg-top bg-cover mr-auto mb-10 ml-auto pt-0
      "
          >
            <div className="bg-top bg-cover ">
              <p className="md:text-lg text-base  text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
              <p
                className="inline-block tracking-wider uppercase rounded-full font-semibold text-xs mb-4 pt-px pr-3
        pb-px pl-3 bg-pink-500 text-white"
              >
                Dream Team
              </p>
            </div>
            <div
              className="max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto text-gray-900 bg-top bg-cover mr-auto mb-6
       ml-auto "
            >
              <div className="relative inline-block bg-top bg-cover ">
                <svg
                  viewbox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20
         text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                    width="52"
                    height="24"
                    className=""
                  />
                </svg>
                <p
                  className="relative inline max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto font-bold text-3xl leading-none
          text-gray-900"
                >
                  Welcome
                </p>
              </div>
              <p className="inline text-2xl "></p>
              <p
                className="inline max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto font-bold text-3xl leading-none mr-0
         text-gray-900"
              >
                our talented team of professionals
              </p>
            </div>
          </div>
          <div
            className="gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 grid bg-top bg-cover mt-0
      mr-auto ml-auto "
          >
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Mac Xenon</p>
                <p className="text-sm mb-4  text-gray-800">Product Manager</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Martha Jena</p>
                <p className="text-sm mb-4  text-gray-800">Design Manager</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Macco James</p>
                <p className="text-sm mb-4  text-gray-800">CTO Lorem ltd</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Jean Wonder</p>
                <p className="text-sm mb-4  text-gray-800">Human Resources</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Mr Smith</p>
                <p className="text-sm mb-4  text-gray-800">Agent</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Andy Townsend</p>
                <p className="text-sm mb-4  text-gray-800">Junior Developer</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Sophia Grey</p>
                <p className="text-sm mb-4  text-gray-800">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Jack Bond</p>
                <p className="text-sm mb-4  text-gray-800">Senior Developer</p>
              </div>
            </div>
            <div className="flex bg-top bg-cover ">
              <img
                src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="h-20 w-20 rounded-full object-cover mr-4  shadow"
              />
              <div className="flex bg-top bg-cover flex-col justify-center ">
                <p className="font-bold text-lg ">Adam Savage</p>
                <p className="text-sm mb-4  text-gray-800">Savage Man</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-top bg-cover">
        <div className="bg-white bg-top bg-cover ">
          <div
            className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mr-auto mb-0
      ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl bg-top bg-cover mr-auto ml-auto ">
              <div className="sm:text-center flex bg-top bg-cover flex-col mb-16 ">
                <div className="sm:mx-auto bg-top bg-cover mb-6 ">
                  <p
                    className="items-center justify-center rounded-full flex text-2xl h-28 mr-auto ml-auto pb-0
           w-28 bg-blue-50 text-blue-600"
                  >
                    <svg
                      viewbox="0 0 512 512"
                      fill="currentColor"
                      className="w-14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m511.4
          38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545
          54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154
          77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447
          2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686
          2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001
          20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827
          16.793-17.82 17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585
          39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197
          62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
          7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
          11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
          11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
          91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756
          34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276
          104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104
          112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
                      />
                      <path
                        d="m350.721 236.243c19.202-.002
          38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
          21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
          32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
          21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499
          13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
          0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
                      />
                      <path
                        d="m15.301 421.938c3.839 0 7.678-1.464
          10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972
          48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
                      />
                      <path
                        d="m119.761
          392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767
          4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"
                      />
                      <path
                        d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606
          4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212
          0z"
                      />
                    </svg>
                  </p>
                </div>
                <div
                  className="max-w-lg font-sans sm:text-4xl md:mx-auto text-gray-900 bg-top bg-cover mr-auto mb-6 ml-auto pt-0
         "
                >
                  <div className="bg-top bg-cover ">
                    <p className="relative inline-block text-2xl ">
                      <svg
                        viewbox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28
           lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                          width="52"
                          height="24"
                        />
                      </svg>
                    </p>
                    <p
                      className="relative font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight mb-0
            text-gray-900"
                    >
                      Improve your day to the MAX
                    </p>
                  </div>
                  <p
                    className="font-sans sm:text-4xl sm:leading-none inline font-bold text-3xl tracking-tight pt-0
          "
                  >
                    with Music
                  </p>
                </div>
                <p className="md:text-lg text-base  text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="space-y-4 bg-top bg-cover ">
                <div className="border rounded shadow-sm bg-top bg-cover ">
                  <div className="focus:outline-none flex w-full bg-top bg-cover items-center pt-4 pr-4 pb-4 pl-4">
                    <p className="font-medium text-lg ">
                      Improve your productivity and speed up your workflow
                    </p>
                  </div>
                  <div className="bg-top bg-cover pr-4 pb-4 pl-4">
                    <p className="text-2xl  text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </p>
                  </div>
                </div>
                <div className="border rounded shadow-sm bg-top bg-cover ">
                  <div className="focus:outline-none flex w-full bg-top bg-cover items-center pt-4 pr-4 pb-4 pl-4">
                    <p className="font-medium text-lg ">
                      The first mate and his Skipper too will do?
                    </p>
                  </div>
                  <div className="bg-top bg-cover pr-4 pb-4 pl-4">
                    <p className="text-2xl  text-gray-700">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque rem aperiam, eaque ipsa
                      quae.
                    </p>
                  </div>
                </div>
                <div className="border rounded shadow-sm bg-top bg-cover ">
                  <div className="focus:outline-none flex w-full bg-top bg-cover items-center pt-4 pr-4 pb-4 pl-4">
                    <p className="font-medium text-lg ">
                      Is the Space Pope reptilian!?
                    </p>
                  </div>
                  <div className="bg-top bg-cover pr-4 pb-4 pl-4">
                    <p className="text-2xl  text-gray-700">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque rem aperiam, eaque ipsa
                      quae.
                    </p>
                  </div>
                </div>
                <div className="border rounded shadow-sm bg-top bg-cover ">
                  <div className="focus:outline-none flex w-full bg-top bg-cover items-center pt-4 pr-4 pb-4 pl-4">
                    <p className="font-medium text-lg ">
                      How much money you got on you?
                    </p>
                  </div>
                  <div className="bg-top bg-cover pr-4 pb-4 pl-4">
                    <p className="text-2xl  text-gray-700">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque rem aperiam, eaque ipsa
                      quae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-white bg-top bg-cover">
        <div className="bg-top bg-cover ">
          <div
            className="bg-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-top bg-cover mt-0
      mr-auto ml-auto pt-16 pr-4 pb-16 pl-4"
          >
            <div className="gap-6 row-gap-10 lg:grid-cols-2 grid bg-top bg-cover ">
              <div className="lg:py-6 lg:pr-16 bg-top bg-cover ">
                <div className="flex bg-top bg-cover ">
                  <div className="flex bg-top bg-cover flex-col items-center mr-4 ">
                    <div className="bg-top bg-cover ">
                      <div
                        className="border flex w-10 h-10 bg-top bg-cover justify-center items-center rounded-full ml-0
            "
                      >
                        <p className="inline-block text-2xl  w-4 text-gray-600">
                          <svg
                            className="w-4
             text-gray-600"
                            stroke="currentColor"
                            strokewidth="2"
                            strokelinecap="round"
                            strokelinejoin="round"
                            viewbox="0
             0 24 24"
                          >
                            <line
                              fill="none"
                              strokemiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokemiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-300 w-px h-full bg-top bg-cover "></div>
                  </div>
                  <div className="bg-top bg-cover pt-1 pb-8 ">
                    <p className="font-bold text-lg mb-2 ">Step 1</p>
                    <p className="text-2xl  text-gray-700">
                      All recipes are written using certain conventions, which
                      define the characteristics of common ingredients. The
                      rules vary from place to place.
                    </p>
                  </div>
                </div>
                <div className="flex bg-top bg-cover ">
                  <div className="flex bg-top bg-cover flex-col items-center mr-4 ">
                    <div className="bg-top bg-cover ">
                      <div
                        className="border flex w-10 h-10 bg-top bg-cover justify-center items-center rounded-full ml-0
            "
                      >
                        <p className="inline-block text-2xl  w-4 text-gray-600">
                          <svg
                            className="w-4
             text-gray-600"
                            stroke="currentColor"
                            strokewidth="2"
                            strokelinecap="round"
                            strokelinejoin="round"
                            viewbox="0
             0 24 24"
                          >
                            <line
                              fill="none"
                              strokemiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokemiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-300 w-px h-full bg-top bg-cover "></div>
                  </div>
                  <div className="bg-top bg-cover pt-1 pb-8 ">
                    <p className="font-bold text-lg mb-2 ">Step 2</p>
                    <p className="text-2xl  text-gray-700">
                      The first mate and his Skipper too will do their very best
                      to make the others comfortable in their tropic island
                      nest. Michael Knight a young loner.
                    </p>
                  </div>
                </div>
                <div className="flex bg-top bg-cover ">
                  <div className="flex bg-top bg-cover flex-col items-center mr-4 ">
                    <div className="bg-top bg-cover ">
                      <div
                        className="border flex w-10 h-10 bg-top bg-cover justify-center items-center rounded-full ml-0
            "
                      >
                        <p className="inline-block text-2xl  w-4 text-gray-600">
                          <svg
                            className="w-4
             text-gray-600"
                            stroke="currentColor"
                            strokewidth="2"
                            strokelinecap="round"
                            strokelinejoin="round"
                            viewbox="0
             0 24 24"
                          >
                            <line
                              fill="none"
                              strokemiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokemiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-300 w-px h-full bg-top bg-cover "></div>
                  </div>
                  <div className="bg-top bg-cover pt-1 pb-8 ">
                    <p className="font-bold text-lg mb-2 ">Step 3</p>
                    <p className="text-2xl  text-gray-700">
                      Tell them I hate them. Is the Space Pope reptilian!? Tell
                      her she looks thin. Hello, little man. I will destroy you!
                    </p>
                  </div>
                </div>
                <div className="flex bg-top bg-cover ">
                  <div className="flex bg-top bg-cover flex-col items-center mr-4 ">
                    <div className="bg-top bg-cover ">
                      <div
                        className="border flex w-10 h-10 bg-top bg-cover justify-center items-center rounded-full ml-0
            "
                      >
                        <p className="inline-block text-2xl  w-4 text-gray-600">
                          <svg
                            className="w-4
             text-gray-600"
                            stroke="currentColor"
                            strokewidth="2"
                            strokelinecap="round"
                            strokelinejoin="round"
                            viewbox="0
             0 24 24"
                          >
                            <line
                              fill="none"
                              strokemiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokemiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-300 w-px h-full bg-top bg-cover "></div>
                  </div>
                  <div className="bg-top bg-cover pt-1 pb-8 ">
                    <p className="font-bold text-lg mb-2 ">Step 4</p>
                    <p className="text-2xl  text-gray-700">
                      If one examines precultural libertarianism, one is faced
                      with a choice: either accept rationalism or conclude that
                      context is a product.
                    </p>
                  </div>
                </div>
                <div className="flex bg-top bg-cover ">
                  <div className="flex bg-top bg-cover flex-col items-center mr-4 ">
                    <div className="bg-top bg-cover ">
                      <div
                        className="border flex w-10 h-10 bg-top bg-cover justify-center items-center rounded-full ml-0
            "
                      >
                        <p className="inline-block text-2xl  w-6 text-gray-600">
                          <svg
                            className="w-6
             text-gray-600"
                            stroke="currentColor"
                            viewbox="0 0 24 24"
                          >
                            <polyline
                              fill="none"
                              strokewidth="2"
                              strokelinecap="round"
                              strokelinejoin="round"
                              strokemiterlimit="10"
                              points="6,12 10,16 18,8"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-top bg-cover pt-1 ">
                    <p className="font-bold text-lg mb-2 ">Success</p>
                    <p className="text-2xl  text-gray-700"></p>
                  </div>
                </div>
              </div>
              <div className="relative bg-top bg-cover ">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="h-96 w-full rounded inset-0 object-cover object-bottom lg:absolute lg:h-full  shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container bg-gray-200 bg-top bg-cover">
        <div className="bg-gray-200 w-full bg-top bg-cover ">
          <div className="bg-gray-200 relative bg-top bg-cover ">
            <div
              className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-top bg-cover mr-auto ml-auto
       pt-12 pr-4 pl-4"
            >
              <p className="text-base  text-gray-500">
                To access and use all the features of Apple Card, you must add
                Apple Card to Wallet on an iPhone or iPad with the latest
                version of iOS or iPadOS. Update to the latest version by going
                to Settings &gt; General &gt; Software Update. Tap Download and
                Install.
              </p>
              <p className="text-base mt-4 mb-4  text-gray-500">
                Available for qualifying applicants in the United States.
              </p>
              <p className="text-base mb-8 pb-8  text-gray-500 border-b border-gray-300">
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other terms apply.
              </p>
              <div className="w-full bg-top bg-cover mb-8 ">
                <div
                  className="grid bg-top bg-cover  grid-cols-2 gap-3 row-gap-5 lg:col-span-5
         md:grid-cols-5"
                >
                  <div className="bg-top bg-cover ">
                    <p
                      className="tracking-wide font-semibold text-lg 
           text-gray-700"
                    >
                      Category
                    </p>
                    <div className="space-y-2 bg-top bg-cover mt-2 ">
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Headlines
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 text-base 
             text-gray-500"
                        >
                          World
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Sport
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Blogs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-top bg-cover ">
                    <p
                      className="tracking-wide font-semibold text-lg 
           text-gray-700"
                    >
                      Category
                    </p>
                    <div className="space-y-2 bg-top bg-cover mt-2 ">
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Headlines
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          World
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Sport
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Blogs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-top bg-cover ">
                    <p
                      className="tracking-wide font-semibold text-lg 
           text-gray-700"
                    >
                      Category
                    </p>
                    <div className="space-y-2 bg-top bg-cover mt-2 ">
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Headlines
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          World
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Sport
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Blogs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-top bg-cover ">
                    <p
                      className="tracking-wide font-semibold text-lg 
           text-gray-700"
                    >
                      Category
                    </p>
                    <div className="space-y-2 bg-top bg-cover mt-2 ">
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Headlines
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          World
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Sport
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Blogs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-top bg-cover ">
                    <p
                      className="tracking-wide font-semibold text-lg 
           text-gray-700"
                    >
                      Category
                    </p>
                    <div className="space-y-2 bg-top bg-cover mt-2 ">
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Headlines
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          World
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Sport
                        </p>
                      </div>
                      <div className="bg-top bg-cover ">
                        <p
                          className="transition-colors duration-300 hover:text-blue-300 text-base 
             text-gray-500"
                        >
                          Blogs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="border-t sm:flex-row flex bg-top bg-cover flex-col justify-between pt-5 pb-10
        "
              >
                <p className="text-sm  text-gray-500">
                  © Copyright 2020 Lorem Inc. All rights reserved.
                </p>
                <div className="space-x-4 sm:flex bg-top bg-cover items-center mt-4 ">
                  <div>
                    <i
                      data-test="fa"
                      className="sc-iwyYcG cunCrG fab fa-twitter transition-colors duration-300
          hover:text-teal-accent-400 h-5  text-gray-500 "
                    ></i>
                  </div>
                  <div>
                    <i
                      data-test="fa"
                      className="sc-iwyYcG cunCrG fab fa-instagram transition-colors duration-300
          hover:text-teal-accent-400 h-6  text-gray-500 "
                    ></i>
                  </div>
                  <div>
                    <i
                      data-test="fa"
                      className="sc-iwyYcG cunCrG fab fa-facebook transition-colors duration-300
          hover:text-teal-accent-400 h-5  text-gray-500 "
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
