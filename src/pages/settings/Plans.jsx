import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import SettingsSidebar from '../../partials/settings/SettingsSidebar'
import PlansPanel from '../../partials/settings/PlansPanel'

function Plans() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                Account Settings
              </h1>
            </div>

            {/* Content */}
            <div className="mb-8 rounded-xl bg-white shadow-xs dark:bg-gray-800">
              <div className="flex flex-col md:-mr-px md:flex-row">
                <SettingsSidebar />
                <PlansPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Plans
