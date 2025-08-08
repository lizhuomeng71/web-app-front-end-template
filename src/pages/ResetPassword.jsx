import React from 'react'
import { Link } from 'react-router-dom'

import AuthImage from '../images/auth-image.jpg'

function ResetPassword() {
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
                Reset your Password
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
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="btn bg-gray-900 whitespace-nowrap text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                    Send Reset Link
                  </button>
                </div>
              </form>
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

export default ResetPassword
