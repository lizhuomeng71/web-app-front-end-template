import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingImage from '../images/onboarding-image.jpg'

function Onboarding01() {
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
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                          to="/onboarding-02"
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                          to="/onboarding-03"
                        >
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-500 dark:bg-gray-900 dark:text-gray-400"
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
                <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Tell us what’s your situation
                </h1>
                {/* Form */}
                <form>
                  <div className="mb-8 space-y-3">
                    <label className="relative block cursor-pointer">
                      <input
                        type="radio"
                        name="radio-buttons"
                        className="peer sr-only"
                        defaultChecked
                      />
                      <div className="flex items-center rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium text-gray-800 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600">
                        <svg
                          className="mr-4 h-6 w-6 shrink-0 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-violet-500"
                            d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                          />
                          <path
                            className="text-violet-300"
                            d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
                          />
                          <path
                            className="text-violet-200"
                            d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z"
                          />
                        </svg>
                        <span>I have a company</span>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
                        aria-hidden="true"
                      ></div>
                    </label>
                    <label className="relative block cursor-pointer">
                      <input
                        type="radio"
                        name="radio-buttons"
                        className="peer sr-only"
                      />
                      <div className="flex items-center rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium text-gray-800 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600">
                        <svg
                          className="mr-4 h-6 w-6 shrink-0 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-violet-500"
                            d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                          />
                          <path
                            className="text-violet-300"
                            d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
                          />
                        </svg>
                        <span>I’m a freelance / contractor</span>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
                        aria-hidden="true"
                      ></div>
                    </label>
                    <label className="relative block cursor-pointer">
                      <input
                        type="radio"
                        name="radio-buttons"
                        className="peer sr-only"
                      />
                      <div className="flex items-center rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium text-gray-800 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600">
                        <svg
                          className="mr-4 h-6 w-6 shrink-0 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-violet-500"
                            d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
                          />
                        </svg>
                        <span>I’m just getting started</span>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
                        aria-hidden="true"
                      ></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="btn ml-auto bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                      to="/onboarding-02"
                    >
                      Next Step -&gt;
                    </Link>
                  </div>
                </form>
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

export default Onboarding01
