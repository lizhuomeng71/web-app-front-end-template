import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import DeleteButton from '../../partials/actions/DeleteButton'
import SearchForm from '../../partials/actions/SearchForm'
import DropdownTransaction from '../../components/DropdownTransaction'
import TransactionsTable from '../../partials/finance/TransactionsTable'
import PaginationClassic from '../../components/PaginationClassic'

function Transactions() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems])
  }

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
          {/* Content */}
          <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
            {/* Page header */}
            <div className="mb-4 sm:flex sm:items-center sm:justify-between md:mb-2">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                  $47,347.09
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
                {/* Delete button */}
                <DeleteButton selectedItems={selectedItems} />

                {/* Search form */}
                <div className="hidden sm:block">
                  <SearchForm />
                </div>

                {/* Export button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  Export Transactions
                </button>
              </div>
            </div>

            <div className="mb-5">
              <span>Transactions from </span>
              <DropdownTransaction />
            </div>

            {/* Filters */}
            <div className="mb-5">
              <ul className="-m-1 flex flex-wrap">
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-gray-900 px-3 py-1 text-sm leading-5 font-medium text-white shadow-xs transition dark:bg-gray-100 dark:text-gray-800">
                    View All
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                    Completed
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                    Pending
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                    Canceled
                  </button>
                </li>
              </ul>
            </div>

            {/* Table */}
            <TransactionsTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Transactions
