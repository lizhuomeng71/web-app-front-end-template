import React, { useState, useEffect, useRef } from 'react'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import MessagesSidebar from '../partials/messages/MessagesSidebar'
import MessagesHeader from '../partials/messages/MessagesHeader'
import MessagesBody from '../partials/messages/MessagesBody'
import MessagesFooter from '../partials/messages/MessagesFooter'

function Messages() {
  const contentArea = useRef(null)

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [msgSidebarOpen, setMsgSidebarOpen] = useState(true)

  useEffect(() => {
    contentArea.current.scrollTop = msgSidebarOpen ? 0 : 99999999
  }, [msgSidebarOpen]) // automatically scroll the chat and make the most recent message visible

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        variant="v2"
      />

      {/* Content area */}
      <div
        className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
        ref={contentArea}
      >
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          variant="v2"
        />

        <main className="grow">
          <div className="relative flex h-full">
            {/* Messages sidebar */}
            <MessagesSidebar
              msgSidebarOpen={msgSidebarOpen}
              setMsgSidebarOpen={setMsgSidebarOpen}
            />

            {/* Messages body */}
            <div
              className={`flex grow flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
                msgSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
              }`}
            >
              <MessagesHeader
                msgSidebarOpen={msgSidebarOpen}
                setMsgSidebarOpen={setMsgSidebarOpen}
              />
              <MessagesBody />
              <MessagesFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Messages
