import React, { useState } from 'react'

function JobSidebar() {
  const [companySetting, setCompanySetting] = useState(true)
  const [immigrationSetting, setImmigrationSetting] = useState(false)

  return (
    <div className="space-y-8">
      {/* Alert */}
      <div className="relative rounded-lg bg-linear-to-r from-violet-500/[0.12] to-violet-500/[0.04] p-5 dark:from-violet-500/[0.24]">
        <div className="absolute bottom-0 -mb-3">
          <svg
            width="44"
            height="42"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill-b">
                <stop stopColor="#B7ACFF" offset="0%" />
                <stop stopColor="#9C8CFF" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="24.537%"
                x2="50%"
                y2="100%"
                id="ill-c"
              >
                <stop stopColor="#4634B1" offset="0%" />
                <stop stopColor="#4634B1" stopOpacity="0" offset="100%" />
              </linearGradient>
              <path id="ill-a" d="m20 0 20 40-20-6.25L0 40z" />
            </defs>
            <g
              transform="scale(-1 1) rotate(-51 -11.267 67.017)"
              fill="none"
              fillRule="evenodd"
            >
              <mask id="ill-d" fill="#fff">
                <use xlinkHref="#ill-a" />
              </mask>
              <use fill="url(#ill-b)" xlinkHref="#ill-a" />
              <path
                fill="url(#ill-c)"
                mask="url(#ill-d)"
                d="M20.586-7.913h25v47.5h-25z"
              />
            </g>
          </svg>
        </div>
        <div className="relative">
          <div className="mb-2 text-sm font-medium text-gray-800 dark:text-violet-200">
            Remember to keep track of your job research.
          </div>
          <div className="text-right">
            <a
              className="text-sm font-medium text-violet-500 hover:text-violet-600"
              href="#0"
            >
              Create Alert -&gt;
            </a>
          </div>
        </div>
      </div>
      {/* White box */}
      <div className="min-w-60 rounded-xl bg-white p-5 shadow-xs dark:bg-gray-800">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
          {/* Group 1 */}
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
              Job Types
            </div>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Programming
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Design
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Management / Finance
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Customer Support
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Sales / Marketing
                  </span>
                </label>
              </li>
            </ul>
          </div>
          {/* Group 2 */}
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
              Company Culture
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-xs"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="ml-2 text-sm text-gray-400 italic dark:text-gray-500">
                {companySetting ? 'On' : 'Off'}
              </div>
            </div>
            <div className="mt-3 text-sm italic dark:text-gray-500">
              Only show companies that are creating a positive culture
            </div>
          </div>
          {/* Group 3 */}
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
              Salary Range
            </div>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    $20K - $50K
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    $50K - $100K
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    &gt; $100K
                  </span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Drawing / Painting
                  </span>
                </label>
              </li>
            </ul>
          </div>
          {/* Group 4 */}
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
              Immigration
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="immigration-toggle"
                  className="sr-only"
                  checked={immigrationSetting}
                  onChange={() => setImmigrationSetting(!immigrationSetting)}
                />
                <label htmlFor="immigration-toggle">
                  <span
                    className="bg-white shadow-xs"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Immigration</span>
                </label>
              </div>
              <div className="ml-2 text-sm text-gray-400 italic dark:text-gray-500">
                {immigrationSetting ? 'On' : 'Off'}
              </div>
            </div>
            <div className="mt-3 text-sm italic dark:text-gray-500">
              Only show companies that can sponsor a visa
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSidebar
