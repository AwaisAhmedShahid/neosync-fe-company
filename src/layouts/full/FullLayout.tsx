import { FC } from 'react'
import { Outlet } from 'react-router'
import Sidebar from './vertical/sidebar/Sidebar'
import Header from './vertical/header/Header'

const FullLayout: FC = () => {
  return (
    <div className="flex w-full min-h-screen bg-muted/40">
      <div className="page-wrapper flex w-full">
        <div className="xl:block hidden">
          <Sidebar />
        </div>
        <div className="body-wrapper w-full min-w-0 bg-background dark:bg-dark">
          <Header />
          <div className="container mx-auto px-6 py-6 max-w-[1400px]">
            <main className="grow">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullLayout
