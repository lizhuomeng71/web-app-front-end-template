import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import PaginationNumeric from '../../components/PaginationNumeric'
import PaginationClassic from '../../components/PaginationClassic'
import PaginationNumeric2 from '../../components/PaginationNumeric2'

function PaginationPage() {
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
                Pagination
              </h1>
            </div>

            <div>
              {/* Components */}
              <div className="mt-8 space-y-8">
                {/* Option 1 */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Option 1
                  </h2>
                  <div className="rounded-lg bg-gray-100 px-6 py-8 dark:bg-gray-800/50">
                    <PaginationNumeric />
                  </div>
                </div>

                {/* Option 2 */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Option 2
                  </h2>
                  <div className="rounded-lg bg-gray-100 px-6 py-8 dark:bg-gray-800/50">
                    <PaginationClassic />
                  </div>
                </div>

                {/* Option 3 */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Option 3
                  </h2>
                  <div className="rounded-lg bg-gray-100 px-6 py-8 dark:bg-gray-800/50">
                    <PaginationNumeric2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PaginationPage
