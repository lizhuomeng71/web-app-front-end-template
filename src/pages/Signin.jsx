import React from 'react'
import { Link } from 'react-router-dom'

import AuthImage from '../images/auth-image.jpg'

function Signin() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
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
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
                Welcome back!
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="mr-1">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Link
                    className="btn ml-3 bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                    to="/"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-700/60">
                <div className="text-sm">
                  Don’t you have an account?{' '}
                  <Link
                    className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  <div className="rounded-sm bg-yellow-500/20 px-3 py-2 text-yellow-700">
                    <svg
                      className="mr-2 inline h-3 w-3 shrink-0 fill-current"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are
                      free until March 31st.
                    </span>
                  </div>
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
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  )
}

export default Signin
