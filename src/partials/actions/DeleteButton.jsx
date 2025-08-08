import React from 'react'

function DeleteButton({ selectedItems }) {
  return (
    <div className={`${selectedItems.length < 1 && 'hidden'}`}>
      <div className="flex items-center">
        <div className="mr-2 hidden text-sm whitespace-nowrap italic xl:block">
          <span>{selectedItems.length}</span> items selected
        </div>
        <button className="btn border-gray-200 bg-white text-red-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteButton
