import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingImage from '../images/onboarding-image.jpg'

function Onboarding02() {
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
                  Tell us about your company
                </h1>
                {/* Form */}
                <form>
                  <div className="mb-8 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                    <label className="relative block flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="radio-buttons"
                        className="peer sr-only"
                        defaultChecked
                      />
                      <div className="h-full rounded-lg border border-gray-200 bg-white px-4 py-6 text-center shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                        <svg
                          className="mt-2 mb-4 inline-flex fill-current text-violet-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.955 9.955 0 0 1-2.003 6.005 2 2 0 0 0-1.382-1.115l-3.293-.732-.295-1.178A4.992 4.992 0 0 0 17 11v-1a5 5 0 0 0-10 0v1c0 1.626.776 3.07 1.977 3.983l-.294 1.175-3.293.732a1.999 1.999 0 0 0-1.384 1.119A9.956 9.956 0 0 1 2 12Zm3.61 7.693A9.96 9.96 0 0 0 12 22c2.431 0 4.66-.868 6.393-2.31l-.212-.847-4.5-1-.496-1.984a5.016 5.016 0 0 1-2.365 0l-.496 1.983-4.5 1-.213.85ZM12 7a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0v-1a3 3 0 0 0-3-3Z"
                            fillRule="evenodd"
                          />
                        </svg>

                        <div className="mb-1 font-semibold text-gray-800 dark:text-gray-100">
                          Individual
                        </div>
                        <div className="text-sm">
                          Lorem ipsum is place text commonly used.
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
                        aria-hidden="true"
                      ></div>
                    </label>
                    <label className="relative block flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="radio-buttons"
                        className="peer sr-only"
                      />
                      <div className="h-full rounded-lg border border-gray-200 bg-white px-4 py-6 text-center shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                        <svg
                          className="mt-2 mb-4 inline-flex fill-current text-violet-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 22V11a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v13H0V14a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v8h2Zm6-15h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7H5V3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4ZM9 22v-8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8h7Zm13 0V11a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v11h7Zm-5-8v-2h3v2h-3Zm0 3v-2h3v2h-3Zm0 3v-2h3v2h-3ZM4 20v-2h3v2H4Zm0-3v-2h3v2H4Z" />
                        </svg>
                        <div className="mb-1 font-semibold text-gray-800 dark:text-gray-100">
                          Organization
                        </div>
                        <div className="text-sm">
                          Lorem ipsum is place text commonly used.
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
                        aria-hidden="true"
                      ></div>
                    </label>
                  </div>
                  <div className="mb-8 flex items-center justify-between space-x-6">
                    <div>
                      <div className="mb-1 text-sm font-medium text-gray-800 dark:text-gray-100">
                        💸 Lorem ipsum is place text commonly?
                      </div>
                      <div className="text-xs">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts.
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="form-switch">
                        <input
                          type="checkbox"
                          id="switch"
                          className="sr-only"
                          defaultChecked
                        />
                        <label htmlFor="switch">
                          <span
                            className="bg-white shadow-xs"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Switch label</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/onboarding-01"
                    >
                      &lt;- Back
                    </Link>
                    <Link
                      className="btn ml-auto bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                      to="/onboarding-03"
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

export default Onboarding02
