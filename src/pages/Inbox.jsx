import React, { useState } from 'react'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import InboxSidebar from '../partials/inbox/InboxSidebar'
import InboxBody from '../partials/inbox/InboxBody'

function Inbox() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [inboxSidebarOpen, setInboxSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        variant="v2"
      />

      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          variant="v2"
        />

        <main className="grow">
          <div className="relative flex h-full">
            {/* Inbox sidebar */}
            <InboxSidebar
              inboxSidebarOpen={inboxSidebarOpen}
              setInboxSidebarOpen={setInboxSidebarOpen}
            />

            {/* Inbox body */}
            <InboxBody
              inboxSidebarOpen={inboxSidebarOpen}
              setInboxSidebarOpen={setInboxSidebarOpen}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Inbox
