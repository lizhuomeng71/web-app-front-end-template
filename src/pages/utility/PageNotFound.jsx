import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

import NotFoundImage from '../../images/404-illustration.svg'
import NotFoundImageDark from '../../images/404-illustration-dark.svg'

function PageNotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        variant="v2"
      />

      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          variant="v3"
        />

        <main className="grow">
          <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
            <div className="m-auto mt-16 max-w-2xl">
              <div className="px-4 text-center">
                <div className="mb-8 inline-flex">
                  <img
                    className="dark:hidden"
                    src={NotFoundImage}
                    width="176"
                    height="176"
                    alt="404 illustration"
                  />
                  <img
                    className="hidden dark:block"
                    src={NotFoundImageDark}
                    width="176"
                    height="176"
                    alt="404 illustration dark"
                  />
                </div>
                <div className="mb-6">
                  Hmm...this page doesn’t exist. Try searching for something
                  else!
                </div>
                <Link
                  to="/"
                  className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                >
                  Back To Dashboard
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PageNotFound
