import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import DeleteButton from '../../partials/actions/DeleteButton'
import DateSelect from '../../components/DateSelect'
import FilterButton from '../../components/DropdownFilter'
import OrdersTable from '../../partials/orders/OrdersTable'
import PaginationClassic from '../../components/PaginationClassic'

function Orders() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems])
  }

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
                  Orders
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
                {/* Delete button */}
                <DeleteButton selectedItems={selectedItems} />
                {/* Dropdown */}
                <DateSelect />
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Add order button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg
                    className="xs:hidden shrink-0 fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add Order</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <OrdersTable selectedItems={handleSelectedItems} />

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

export default Orders
