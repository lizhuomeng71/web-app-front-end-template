import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import ForumLeftContent from '../../partials/community/ForumLeftContent'
import ForumEntry from '../../partials/community/ForumEntry'
import ForumRightContent from '../../partials/community/ForumPostRightContent'

function ForumPost() {
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
          <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 md:py-0 lg:px-8">
            <div className="xl:flex">
              {/* Left + Middle content */}
              <div className="flex-1 md:flex">
                {/* Left content */}
                <ForumLeftContent />

                {/* Middle content */}
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:py-8">
                    {/* Forum entry */}
                    <ForumEntry />
                  </div>
                </div>
              </div>

              {/* Right content */}
              <ForumRightContent />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ForumPost
