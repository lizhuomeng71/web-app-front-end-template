import React from 'react'

import UserImage01 from '../../images/user-28-08.jpg'

function Task07() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-xs dark:bg-gray-800">
      {/* Body */}
      <div className="mb-3">
        {/* Title */}
        <h2 className="mb-1 font-semibold text-gray-800 dark:text-gray-100">
          Manage internal feedback
        </h2>
      </div>
      {/* Meta */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="-ml-px flex shrink-0 -space-x-3">
          <a className="block" href="#0">
            <img
              className="box-content rounded-full border-2 border-white dark:border-gray-800"
              src={UserImage01}
              width="28"
              height="28"
              alt="User 08"
            />
          </a>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          {/* To-do info */}
          <div className="ml-3 flex items-center text-gray-400 dark:text-gray-500">
            <svg
              className="mr-1.5 shrink-0 fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6z" />
            </svg>
            <div className="text-sm text-gray-500 dark:text-gray-400">2/2</div>
          </div>
          {/* Attach button */}
          <button className="ml-3 text-gray-400 hover:text-violet-500 dark:text-gray-500 dark:hover:text-violet-500">
            <svg
              className="mr-1.5 shrink-0 fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
            </svg>
          </button>
        </div>
      </div>
      {/* List */}
      <ul className="mt-3">
        <li className="flex items-center border-t border-gray-100 py-2 dark:border-gray-700/60">
          <svg
            className="mr-2 h-3 w-3 shrink-0 fill-current text-green-500"
            viewBox="0 0 12 12"
          >
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div className="text-sm text-gray-400 line-through dark:text-gray-500">
            Call with incoming clients
          </div>
        </li>
        <li className="flex items-center border-t border-gray-100 py-2 dark:border-gray-700/60">
          <svg
            className="mr-2 h-3 w-3 shrink-0 fill-current text-green-500"
            viewBox="0 0 12 12"
          >
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div className="text-sm text-gray-400 line-through dark:text-gray-500">
            Manage inbound deals
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Task07
