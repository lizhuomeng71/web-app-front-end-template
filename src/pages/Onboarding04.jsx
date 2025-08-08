import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingImage from '../images/onboarding-image.jpg'

function Onboarding04() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="relative flex">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            <div className="flex-1">
              {/* Header */}
              <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg
                    className="fill-violet-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                  >
                    <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
                  </svg>
                </Link>
                <div className="text-sm">
                  Have an account?{' '}
                  <Link
                    className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="mx-auto w-full max-w-md">
                  <div className="relative">
                    <div
                      className="absolute top-1/2 left-0 -mt-px h-0.5 w-full bg-gray-200 dark:bg-gray-700/60"
                      aria-hidden="true"
                    ></div>
                    <ul className="relative flex w-full justify-between">
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white"
                          to="/onboarding-01"
                        >
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white"
                          to="/onboarding-02"
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white"
                          to="/onboarding-03"
                        >
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white"
                          to="/onboarding-04"
                        >
                          4
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="mx-auto max-w-md">
                <div className="text-center">
                  <svg
                    className="mb-6 inline-flex h-16 w-16 fill-current"
                    viewBox="0 0 64 64"
                  >
                    <circle
                      className="text-green-500/20"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="text-green-700"
                      d="M37.22 26.375a1 1 0 1 1 1.56 1.25l-8 10a1 1 0 0 1-1.487.082l-4-4a1 1 0 0 1 1.414-1.414l3.21 3.21 7.302-9.128Z"
                    />
                  </svg>
                  <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Nice to have you, Acme Inc. 🙌
                  </h1>
                  <Link
                    className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                    to="/"
                  >
                    Go To Dashboard -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="absolute top-0 right-0 bottom-0 hidden md:block md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="h-full w-full object-cover object-center"
            src={OnboardingImage}
            width="760"
            height="1024"
            alt="Onboarding"
          />
        </div>
      </div>
    </main>
  )
}

export default Onboarding04
