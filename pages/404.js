import React from "react";
import Head from 'next/head'
// import style from '../404/page404.css'

export default function Custom404() {
  return (
    <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <header class="">
        <link rel="stylesheet" href="/style404.css" />
      </header>

      <p className="text-4xl font-bold tracking-tight text-transparent bg-gradient-to-br from-pink-400 to-cyan-600 bg-clip-text sm:text-5xl">
        404
      </p>
      <div className="sm:ml-6">
        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-1 text-base text-gray-500">
            Please check the URL in the address bar and try again.
          </p>
        </div>
        <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
          {/* <Link href="/">
                <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border-transparent rounded-md shadow-sm bg-gradient-to-br from-pink-400 to-cyan-600 hover:bg-gradient-to-br hover:from-pink-600 hover:to-cyan-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                  Go back home
                </a>
              </Link>
              <Link href="/support">
                <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-pink-100 border border-transparent rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                  Contact support
                </a>
              </Link> */}
        </div>
      </div>

      <div class="wrapper">
        <h3 class="title">We can't seem to find the page you're looking for</h3>
      </div>

    </div>


  )
}
