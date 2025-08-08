import React from 'react'

import ProfileBg from '../../images/profile-bg.jpg'
import UserAvatar from '../../images/user-128-01.jpg'
import Icon02 from '../../images/icon-02.svg'
import Icon03 from '../../images/icon-03.svg'
import UserImage01 from '../../images/avatar-01.jpg'
import UserImage02 from '../../images/avatar-02.jpg'
import UserImage03 from '../../images/avatar-03.jpg'
import UserImage04 from '../../images/avatar-04.jpg'
import UserImage05 from '../../images/avatar-05.jpg'
import UserImage06 from '../../images/avatar-06.jpg'

function ProfileBody({ profileSidebarOpen, setProfileSidebarOpen }) {
  return (
    <div
      className={`flex grow flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
        profileSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
      }`}
    >
      {/* Profile background */}
      <div className="relative h-56 bg-gray-200 dark:bg-gray-900">
        <img
          className="h-full w-full object-cover"
          src={ProfileBg}
          width="979"
          height="220"
          alt="Profile background"
        />
        {/* Close button */}
        <button
          className="absolute top-4 left-4 text-white opacity-80 hover:opacity-100 sm:left-6 md:hidden"
          onClick={() => setProfileSidebarOpen(!profileSidebarOpen)}
          aria-controls="profile-sidebar"
          aria-expanded={profileSidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative px-4 pb-8 sm:px-6">
        {/* Pre-header */}
        <div className="-mt-16 mb-6 sm:mb-3">
          <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
            {/* Avatar */}
            <div className="-mt-1 mb-4 -ml-1 inline-flex sm:mb-0">
              <img
                className="rounded-full border-4 border-white dark:border-gray-900"
                src={UserAvatar}
                width="128"
                height="128"
                alt="Avatar"
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-2 sm:mb-2">
              <button className="shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-xs hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                <svg
                  className="h-1 w-4 fill-current text-gray-400"
                  viewBox="0 0 16 4"
                >
                  <circle cx="8" cy="2" r="2" />
                  <circle cx="2" cy="2" r="2" />
                  <circle cx="14" cy="2" r="2" />
                </svg>
              </button>
              <button className="shrink-0 rounded-lg border border-gray-200 bg-white p-1.5 shadow-xs hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                <svg
                  className="fill-current text-violet-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                </svg>
              </button>
              <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                <svg
                  className="shrink-0 fill-current"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                >
                  <path d="m.457 4.516.969-.99 2.516 2.481L9.266.702l.985.99-6.309 6.284z" />
                </svg>
                <span className="ml-2">Following</span>
              </button>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="mb-6 text-center sm:text-left">
          {/* Name */}
          <div className="mb-2 inline-flex items-start">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Carolyn McNeail
            </h1>
            <svg
              className="ml-2 shrink-0 fill-current text-yellow-500"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
            </svg>
          </div>
          {/* Bio */}
          <div className="mb-3 text-sm">
            Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP
            Lover.
          </div>
          {/* Meta */}
          <div className="flex flex-wrap justify-center space-x-4 sm:justify-start">
            <div className="flex items-center">
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
              </svg>
              <span className="ml-2 text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Milan, IT
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <a
                className="ml-2 text-sm font-medium whitespace-nowrap text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                href="#0"
              >
                carolinmcneail.com
              </a>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="relative mb-6">
          <div
            className="absolute bottom-0 h-px w-full bg-gray-200 dark:bg-gray-700/60"
            aria-hidden="true"
          ></div>
          <ul className="no-scrollbar relative -mx-4 flex flex-nowrap overflow-x-scroll text-sm font-medium sm:-mx-6 lg:-mx-8">
            <li className="mr-6 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
              <a
                className="block border-b-2 border-violet-500 pb-3 whitespace-nowrap text-violet-500"
                href="#0"
              >
                General
              </a>
            </li>
            <li className="mr-6 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
              <a
                className="block pb-3 whitespace-nowrap text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                href="#0"
              >
                Connections
              </a>
            </li>
            <li className="mr-6 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
              <a
                className="block pb-3 whitespace-nowrap text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                href="#0"
              >
                Contributions
              </a>
            </li>
          </ul>
        </div>

        {/* Profile content */}
        <div className="flex flex-col xl:flex-row xl:space-x-16">
          {/* Main content */}
          <div className="mb-8 flex-1 space-y-5 xl:mb-0">
            {/* About Me */}
            <div>
              <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                About Me
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor magna
                  aliqua.
                </p>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                Departments
              </h2>
              {/* Cards */}
              <div className="grid gap-4 xl:grid-cols-2">
                {/* Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700/60 dark:bg-gray-900">
                  {/* Card header */}
                  <div className="mb-2 flex grow items-center truncate">
                    <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700">
                      <img
                        className="ml-1"
                        src={Icon03}
                        width="14"
                        height="14"
                        alt="Icon 03"
                      />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        Acme Marketing
                      </span>
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="mb-3 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </div>
                  {/* Card footer */}
                  <div className="flex items-center justify-between">
                    {/* Avatars group */}
                    <div className="-ml-0.5 flex -space-x-3">
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage02}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage03}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage04}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage05}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                    </div>
                    {/* Link */}
                    <div>
                      <a
                        className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                        href="#0"
                      >
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700/60 dark:bg-gray-900">
                  {/* Card header */}
                  <div className="mb-2 flex grow items-center truncate">
                    <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700">
                      <img
                        className="ml-1"
                        src={Icon02}
                        width="14"
                        height="14"
                        alt="Icon 02"
                      />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        Acme Product
                      </span>
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="mb-3 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </div>
                  {/* Card footer */}
                  <div className="flex items-center justify-between">
                    {/* Avatars group */}
                    <div className="-ml-0.5 flex -space-x-3">
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage06}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage03}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                      <img
                        className="box-content rounded-full border-2 border-white dark:border-gray-800"
                        src={UserImage01}
                        width="24"
                        height="24"
                        alt="Avatar"
                      />
                    </div>
                    {/* Link */}
                    <div>
                      <a
                        className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                        href="#0"
                      >
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work History */}
            <div>
              <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                Work History
              </h2>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700/60 dark:bg-gray-900">
                <ul className="space-y-3">
                  {/* Item */}
                  <li className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center text-sm sm:grow">
                      {/* Icon */}
                      <div className="my-2 mr-3 h-8 w-8 shrink-0 rounded-full bg-yellow-500">
                        <svg
                          className="h-8 w-8 fill-current text-yellow-50"
                          viewBox="0 0 32 32"
                        >
                          <path d="M21 14a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 1-.75.75Zm-7 10a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 0 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
                        </svg>
                      </div>
                      {/* Position */}
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                          Senior Product Designer
                        </div>
                        <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                          <div>Remote</div>
                          <div className="text-gray-400 dark:text-gray-600">
                            ·
                          </div>
                          <div>April, 2020 - Today</div>
                        </div>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="mt-2 sm:mt-0 sm:ml-2">
                      <ul className="-m-1 flex flex-wrap sm:justify-end">
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            Marketing
                          </button>
                        </li>
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            +4
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Item */}
                  <li className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center text-sm sm:grow">
                      {/* Icon */}
                      <div className="my-2 mr-3 h-8 w-8 shrink-0 rounded-full bg-violet-500">
                        <svg
                          className="h-8 w-8 fill-current text-violet-50"
                          viewBox="0 0 32 32"
                        >
                          <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                        </svg>
                      </div>
                      {/* Position */}
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                          Product Designer
                        </div>
                        <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                          <div>Milan, IT</div>
                          <div className="text-gray-400 dark:text-gray-600">
                            ·
                          </div>
                          <div>April, 2018 - April 2020</div>
                        </div>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="mt-2 sm:mt-0 sm:ml-2">
                      <ul className="-m-1 flex flex-wrap sm:justify-end">
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            Marketing
                          </button>
                        </li>
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            +4
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Item */}
                  <li className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center text-sm sm:grow">
                      {/* Icon */}
                      <div className="my-2 mr-3 h-8 w-8 shrink-0 rounded-full bg-violet-500">
                        <svg
                          className="h-8 w-8 fill-current text-violet-50"
                          viewBox="0 0 32 32"
                        >
                          <path d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                        </svg>
                      </div>
                      {/* Position */}
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                          Product Designer
                        </div>
                        <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                          <div>Milan, IT</div>
                          <div className="text-gray-400 dark:text-gray-600">
                            ·
                          </div>
                          <div>April, 2018 - April 2020</div>
                        </div>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="mt-2 sm:mt-0 sm:ml-2">
                      <ul className="-m-1 flex flex-wrap sm:justify-end">
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            Marketing
                          </button>
                        </li>
                        <li className="m-1">
                          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                            +4
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-3 xl:w-56 xl:min-w-56">
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                Title
              </h3>
              <div>Senior Product Designer</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                Location
              </h3>
              <div>Milan, IT - Remote</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                Email
              </h3>
              <div>carolinmcneail@acme.com</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                Birthdate
              </h3>
              <div>4 April, 1987</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                Joined Acme
              </h3>
              <div>7 April, 2017</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ProfileBody
