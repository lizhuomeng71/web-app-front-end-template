import React, { useState } from 'react'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import Datepicker from '../components/Datepicker'
import AnalyticsCard01 from '../partials/analytics/AnalyticsCard01'
import AnalyticsCard02 from '../partials/analytics/AnalyticsCard02'
import AnalyticsCard03 from '../partials/analytics/AnalyticsCard03'
import AnalyticsCard04 from '../partials/analytics/AnalyticsCard04'
import AnalyticsCard05 from '../partials/analytics/AnalyticsCard05'
import AnalyticsCard06 from '../partials/analytics/AnalyticsCard06'
import AnalyticsCard07 from '../partials/analytics/AnalyticsCard07'
import AnalyticsCard08 from '../partials/analytics/AnalyticsCard08'
import AnalyticsCard09 from '../partials/analytics/AnalyticsCard09'
import AnalyticsCard10 from '../partials/analytics/AnalyticsCard10'
import AnalyticsCard11 from '../partials/analytics/AnalyticsCard11'

function Analytics() {
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
            <div className="mb-8 sm:flex sm:items-center sm:justify-between">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                  Analytics
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
                {/* Datepicker built with React Day Picker */}
                <Datepicker align="right" />
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/*  Line chart (Active Users Right Now) */}
              <AnalyticsCard02 />
              {/* Stacked bar chart (Acquisition Channels) */}
              <AnalyticsCard03 />
              {/* Horizontal bar chart (Audience Overview) */}
              <AnalyticsCard04 />
              {/* Report card (Top Channels) */}
              <AnalyticsCard05 />
              {/* Report card (Top Pages) */}
              <AnalyticsCard06 />
              {/* Report card (Top Countries) */}
              <AnalyticsCard07 />
              {/* Doughnut chart (Sessions By Device) */}
              <AnalyticsCard08 />
              {/* Doughnut chart (Visit By Age Category) */}
              <AnalyticsCard09 />
              {/* Polar chart (Sessions By Gender) */}
              <AnalyticsCard10 />
              {/* Table (Top Products) */}
              <AnalyticsCard11 />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analytics
