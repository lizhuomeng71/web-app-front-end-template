import React, { useState, useEffect } from 'react'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'

function Calendar() {
  const today = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [month, setMonth] = useState(today.getMonth())
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState(today.getFullYear())
  const [daysInMonth, setDaysInMonth] = useState([])
  const [startingBlankDays, setStartingBlankDays] = useState([])
  const [endingBlankDays, setEndingBlankDays] = useState([])
  const events = [
    // Previous month
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        8,
        3,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        8,
        7,
      ),
      eventName: '⛱️ Relax for 2 at Marienbad',
      eventColor: 'indigo',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        12,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        12,
        11,
      ),
      eventName: 'Team Catch-up',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        18,
        2,
      ),
      eventEnd: '',
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow',
    },
    // Current month
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1,
        11,
      ),
      eventName: 'Meeting w/ Patrick Lin',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1,
        19,
      ),
      eventEnd: '',
      eventName: 'Reservation at La Ginestre',
      eventColor: 'indigo',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        3,
        9,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        3,
        10,
      ),
      eventName: '✍️ New Project',
      eventColor: 'yellow',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        7,
        21,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        7,
        22,
      ),
      eventName: '⚽ 2024 - Semi-final',
      eventColor: 'red',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        11,
      ),
      eventName: 'Meeting w/Carolyn',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        13,
      ),
      eventEnd: '',
      eventName: 'Pick up Marta at school',
      eventColor: 'green',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        14,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        15,
      ),
      eventName: 'Meeting w/ Patrick Lin',
      eventColor: 'green',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        9,
        19,
      ),
      eventEnd: '',
      eventName: 'Reservation at La Ginestre',
      eventColor: 'indigo',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        11,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        11,
        11,
      ),
      eventName: '⛱️ Relax for 2 at Marienbad',
      eventColor: 'indigo',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        11,
        19,
      ),
      eventEnd: '',
      eventName: '⚽ 2024 - Semi-final',
      eventColor: 'red',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        14,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        14,
        11,
      ),
      eventName: 'Team Catch-up',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        21,
        2,
      ),
      eventEnd: '',
      eventName: 'Pick up Marta at school',
      eventColor: 'green',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        21,
        3,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        21,
        7,
      ),
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        22,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        22,
        11,
      ),
      eventName: 'Team Catch-up',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        22,
        19,
      ),
      eventEnd: '',
      eventName: '⚽ 2024 - Semi-final',
      eventColor: 'red',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        23,
        0,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        23,
        23,
      ),
      eventName: 'You stay at Meridiana B&B',
      eventColor: 'indigo',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        25,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        25,
        11,
      ),
      eventName: 'Meeting w/ Kylie Joh',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        29,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        29,
        11,
      ),
      eventName: 'Call Request ->',
      eventColor: 'sky',
    },
    // Next month
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        2,
        3,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        2,
        7,
      ),
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        14,
        10,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        14,
        11,
      ),
      eventName: 'Team Catch-up',
      eventColor: 'sky',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        25,
        2,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        25,
        3,
      ),
      eventName: 'Pick up Marta at school',
      eventColor: 'green',
    },
    {
      eventStart: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        27,
        21,
      ),
      eventEnd: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        27,
        22,
      ),
      eventName: '⚽ 2024 - Semi-final',
      eventColor: 'red',
    },
  ]

  const isToday = (date) => {
    const day = new Date(year, month, date)
    return today.toDateString() === day.toDateString() ? true : false
  }

  const getEvents = (date) => {
    return events.filter(
      (e) =>
        new Date(e.eventStart).toDateString() ===
        new Date(year, month, date).toDateString(),
    )
  }

  const eventColor = (color) => {
    switch (color) {
      case 'sky':
        return 'text-white bg-sky-500'
      case 'indigo':
        return 'text-white bg-violet-500'
      case 'yellow':
        return 'text-white bg-yellow-500'
      case 'green':
        return 'text-white bg-green-500'
      case 'red':
        return 'text-white bg-red-500'
      default:
        return ''
    }
  }

  const getDays = () => {
    const days = new Date(year, month + 1, 0).getDate()

    // starting empty cells (previous month)
    const startingDayOfWeek = new Date(year, month).getDay()
    let startingBlankDaysArray = []
    for (let i = 1; i <= startingDayOfWeek; i++) {
      startingBlankDaysArray.push(i)
    }

    // ending empty cells (next month)
    const endingDayOfWeek = new Date(year, month + 1, 0).getDay()
    let endingBlankDaysArray = []
    for (let i = 1; i < 7 - endingDayOfWeek; i++) {
      endingBlankDaysArray.push(i)
    }

    // current month cells
    let daysArray = []
    for (let i = 1; i <= days; i++) {
      daysArray.push(i)
    }

    setStartingBlankDays(startingBlankDaysArray)
    setEndingBlankDays(endingBlankDaysArray)
    setDaysInMonth(daysArray)
  }

  useEffect(() => {
    getDays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <div className="mb-4 sm:flex sm:items-center sm:justify-between">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                  <span>{`${monthNames[month]} ${year}`}</span>
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
                {/* Previous month button */}
                <button
                  className="btn border-gray-200 bg-white px-2.5 text-gray-500 hover:border-gray-300 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300 dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:text-gray-600"
                  disabled={month === 0 ? true : false}
                  onClick={() => {
                    setMonth(month - 1)
                    getDays()
                  }}
                >
                  <span className="sr-only">Previous month</span>
                  <wbr />
                  <svg
                    className="fill-current text-gray-400 dark:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                  </svg>
                </button>

                {/* Next month button */}
                <button
                  className="btn border-gray-200 bg-white px-2.5 text-gray-500 hover:border-gray-300 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300 dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:text-gray-600"
                  disabled={month === 11 ? true : false}
                  onClick={() => {
                    setMonth(month + 1)
                    getDays()
                  }}
                >
                  <span className="sr-only">Next month</span>
                  <wbr />
                  <svg
                    className="fill-current text-gray-400 dark:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </button>

                <hr className="mx-1 h-full w-px border-none bg-gray-200 dark:bg-gray-700/60" />

                {/* Create event button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  Create Event
                </button>
              </div>
            </div>

            {/* Filters and view buttons */}
            <div className="mb-4 sm:flex sm:items-center sm:justify-between">
              {/* Filters  */}
              <div className="mr-2 mb-4 sm:mb-0">
                <ul className="-m-1 flex flex-wrap items-center">
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      <div className="h-3.5 w-1 shrink-0 bg-sky-500"></div>
                      <span className="ml-1.5">Acme Inc.</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      <div className="h-3.5 w-1 shrink-0 bg-green-500"></div>
                      <span className="ml-1.5">Life & Family</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      <div className="h-3.5 w-1 shrink-0 bg-violet-500"></div>
                      <span className="ml-1.5">Reservations</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      <div className="h-3.5 w-1 shrink-0 bg-red-500"></div>
                      <span className="ml-1.5">Events</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-gray-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      <div className="h-3.5 w-1 shrink-0 bg-yellow-500"></div>
                      <span className="ml-1.5">Misc</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="btn-sm border-gray-200 bg-white text-violet-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                      +Add New
                    </button>
                  </li>
                </ul>
              </div>

              {/* View buttons (requires custom integration) */}
              <div className="flex flex-nowrap -space-x-px">
                <button className="btn rounded-none border-gray-200 bg-white text-violet-500 first:rounded-l-lg last:rounded-r-lg dark:border-gray-700/60 dark:bg-gray-800">
                  Month
                </button>
                <button className="btn rounded-none border-gray-200 bg-white text-gray-600 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900">
                  Week
                </button>
                <button className="btn rounded-none border-gray-200 bg-white text-gray-600 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900">
                  Day
                </button>
              </div>
            </div>

            {/* Calendar table */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
              {/* Days of the week */}
              <div className="grid grid-cols-7 gap-px border-b border-gray-200 dark:border-gray-700/60">
                {dayNames.map((day) => {
                  return (
                    <div className="px-1 py-3" key={day}>
                      <div className="text-center text-sm font-medium text-gray-500 lg:hidden">
                        {day.substring(0, 3)}
                      </div>
                      <div className="hidden text-center text-sm font-medium text-gray-500 lg:block dark:text-gray-400">
                        {day}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700/60">
                {/* Diagonal stripes pattern */}
                <svg className="sr-only">
                  <defs>
                    <pattern
                      id="stripes"
                      patternUnits="userSpaceOnUse"
                      width="5"
                      height="5"
                      patternTransform="rotate(135)"
                    >
                      <line
                        className="stroke-current text-gray-200 opacity-50 dark:text-gray-700"
                        x1="0"
                        y="0"
                        x2="0"
                        y2="5"
                        strokeWidth="2"
                      />
                    </pattern>
                  </defs>
                </svg>
                {/* Empty cells (previous month) */}
                {startingBlankDays.map((blankday) => {
                  return (
                    <div
                      className="h-20 bg-gray-50 sm:h-28 lg:h-36 dark:bg-gray-800"
                      key={blankday}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                      >
                        <rect width="100%" height="100%" fill="url(#stripes)" />
                      </svg>
                    </div>
                  )
                })}
                {/* Days of the current month */}
                {daysInMonth.map((day) => {
                  return (
                    <div
                      className="relative h-20 overflow-hidden bg-white sm:h-28 lg:h-36 dark:bg-gray-800"
                      key={day}
                    >
                      <div className="flex h-full flex-col justify-between">
                        {/* Events */}
                        <div className="relative flex grow flex-col overflow-hidden p-0.5 sm:p-1.5">
                          {getEvents(day).map((event) => {
                            return (
                              <button
                                className="relative mb-1 w-full text-left"
                                key={event.eventName}
                              >
                                <div
                                  className={`overflow-hidden rounded-lg px-2 py-0.5 ${eventColor(event.eventColor)}`}
                                >
                                  {/* Event name */}
                                  <div className="truncate text-xs font-semibold">
                                    {event.eventName}
                                  </div>
                                  {/* Event time */}
                                  <div className="hidden truncate text-xs uppercase sm:block">
                                    {/* Start date */}
                                    {event.eventStart && (
                                      <span>
                                        {event.eventStart.toLocaleTimeString(
                                          [],
                                          {
                                            hour12: true,
                                            hour: 'numeric',
                                            minute: 'numeric',
                                          },
                                        )}
                                      </span>
                                    )}
                                    {/* End date */}
                                    {event.eventEnd && (
                                      <span>
                                        -{' '}
                                        <span>
                                          {event.eventEnd.toLocaleTimeString(
                                            [],
                                            {
                                              hour12: true,
                                              hour: 'numeric',
                                              minute: 'numeric',
                                            },
                                          )}
                                        </span>
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </button>
                            )
                          })}
                          <div
                            className="pointer-events-none absolute right-0 bottom-0 left-0 h-4 bg-linear-to-t from-white to-transparent dark:from-gray-800"
                            aria-hidden="true"
                          ></div>
                        </div>
                        {/* Cell footer */}
                        <div className="flex items-center justify-between p-0.5 sm:p-1.5">
                          {/* More button (if more than 2 events) */}
                          {getEvents(day).length > 2 && (
                            <button className="rounded-lg border border-gray-200 px-0.5 text-center text-xs font-medium whitespace-nowrap text-gray-500 sm:px-2 sm:py-0.5 dark:border-gray-700/60 dark:text-gray-300">
                              <span className="md:hidden">+</span>
                              <span>{getEvents(day).length - 2}</span>{' '}
                              <span className="hidden md:inline">more</span>
                            </button>
                          )}
                          {/* Day number */}
                          <button
                            className={`ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full text-center text-xs font-medium hover:bg-violet-100 sm:text-sm dark:text-gray-300 dark:hover:bg-gray-600 ${isToday(day) && 'text-violet-500'}`}
                          >
                            {day}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* Empty cells (next month) */}
                {endingBlankDays.map((blankday) => {
                  return (
                    <div
                      className="h-20 bg-gray-50 sm:h-28 lg:h-36 dark:bg-gray-800"
                      key={blankday}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                      >
                        <rect width="100%" height="100%" fill="url(#stripes)" />
                      </svg>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Calendar
