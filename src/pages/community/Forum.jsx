import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import ForumLeftContent from '../../partials/community/ForumLeftContent'
import ForumEntries from '../../partials/community/ForumEntries'
import ForumRightContent from '../../partials/community/ForumRightContent'

function Forum() {
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
                    {/* Buttons group */}
                    <div className="mb-4">
                      <div className="flex w-full flex-wrap -space-x-px">
                        <button className="btn grow rounded-none border-gray-200 bg-white text-violet-500 first:rounded-l-lg last:rounded-r-lg dark:border-gray-700/60 dark:bg-gray-800">
                          Popular
                        </button>
                        <button className="btn grow rounded-none border-gray-200 bg-white text-gray-600 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/20">
                          Newest
                        </button>
                        <button className="btn grow rounded-none border-gray-200 bg-white text-gray-600 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/20">
                          Following
                        </button>
                      </div>
                    </div>

                    {/* Forum Entries */}
                    <div className="space-y-2">
                      <ForumEntries />
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 text-right">
                      <nav
                        className="inline-flex"
                        role="navigation"
                        aria-label="Navigation"
                      >
                        <ul className="flex justify-center">
                          <li className="ml-3 first:ml-0">
                            <span className="btn border-gray-200 bg-white text-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-600">
                              &lt;- Previous
                            </span>
                          </li>
                          <li className="ml-3 first:ml-0">
                            <a
                              className="btn border-gray-200 bg-white text-gray-800 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
                              href="#0"
                            >
                              Next -&gt;
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
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

export default Forum
