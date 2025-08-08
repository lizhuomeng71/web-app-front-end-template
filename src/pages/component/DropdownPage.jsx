import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import DropdownClassic from '../../components/DropdownClassic'
import DropdownFull from '../../components/DropdownFull'
import DropdownFilter from '../../components/DropdownFilter'
import DropdownProfile from '../../components/DropdownProfile'
import DropdownSwitch from '../../components/DropdownSwitch'
import DropdownNotifications from '../../components/DropdownNotifications'
import DropdownHelp from '../../components/DropdownHelp'
import DropdownEditMenu from '../../components/DropdownEditMenu'
import Datepicker from '../../components/Datepicker'

function DropdownPage() {
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
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                Dropdown
              </h1>
            </div>

            <div>
              {/* Components */}
              <div className="mt-8 mb-80 space-y-8">
                {/* Classic Dropdown */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Classic Dropdown
                  </h2>
                  {/* Start */}
                  <DropdownClassic />
                  {/* End */}
                </div>

                {/* Full-width Dropdown */}
                <div className="w-80">
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Full-width Dropdown
                  </h2>
                  <DropdownFull />
                </div>

                {/* Filter */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Filter
                  </h2>
                  <DropdownFilter />
                </div>

                {/* Profile */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Profile
                  </h2>
                  <DropdownProfile />
                </div>

                {/* Switch Account */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Switch Account
                  </h2>
                  <DropdownSwitch />
                </div>

                {/* Notification */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Notification
                  </h2>
                  <DropdownNotifications />
                </div>

                {/* Help Center */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Help Center
                  </h2>
                  <DropdownHelp />
                </div>

                {/* Quick Selection */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Quick Selection
                  </h2>
                  <DropdownEditMenu className="relative inline-flex">
                    <li>
                      <a
                        className="flex px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                        href="#0"
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                        href="#0"
                      >
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex px-3 py-1 text-sm font-medium text-red-500 hover:text-red-600"
                        href="#0"
                      >
                        Remove
                      </a>
                    </li>
                  </DropdownEditMenu>
                </div>

                {/* Datepicker (built with React Day Picker) */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Datepicker (built with{' '}
                    <a
                      className="underline hover:no-underline"
                      href="https://daypicker.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React Day Picker
                    </a>
                    )
                  </h2>
                  <Datepicker />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DropdownPage
