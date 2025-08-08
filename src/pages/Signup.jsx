import React from 'react'
import { Link } from 'react-router-dom'

import AuthImage from '../images/auth-image.jpg'

function Signup() {
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
                Create your Account
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email Address <span className="text-red-500">*</span>
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
                      htmlFor="name"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor="role"
                    >
                      Your Role <span className="text-red-500">*</span>
                    </label>
                    <select id="role" className="form-select w-full">
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Accountant</option>
                    </select>
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
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2 text-sm">
                        Email me about product news.
                      </span>
                    </label>
                  </div>
                  <Link
                    className="btn ml-3 bg-gray-900 whitespace-nowrap text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-700/60">
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

export default Signup
