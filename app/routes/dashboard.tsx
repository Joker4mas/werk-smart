import { LuLayoutDashboard,LuMessageSquareMore
 } from "react-icons/lu";

import { SlMap, SlFolderAlt, SlLogout, SlSettings } from "react-icons/sl";

import {
  PiClipboardTextThin,
  PiGreaterThanThin,
} from "react-icons/pi";
import { Link } from "@remix-run/react";
import { TbUsersGroup, TbMessage2Question } from "react-icons/tb";

function dashboard() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="grid-Container grid grid-flow-col gap-4 ">
        {/* Example: <Sidebar /> */}
        <div className="side-bar border-2 border-rose-700 w-60 bg-primary p-4 h-screen text-white">
          <div className="sideBar-logo">
            <img src="/pubLinkc/logo-side.png" alt="" />
          </div>

          <div className="workSpace-container grid grid-cols-1 gap-2 place-items-start my-6 text-start">
            <h2 className="text-start">Workspaces</h2>
            <ul className="workSpace-Link flex flex-row items-center ">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-300  overflow-hidden"
                >
                  <img src="/public/Ellipse1.png" alt="Work space logo one" />
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-300">
                  <img src="/public/Ellipse-2.png" alt=" work space logo two" />
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-300">
                  <img src="/public/Ellipse3.png" alt="work space logo three" />
                </Link>
              <Link to={'#'}>
                <PiGreaterThanThin />
              </Link>
            </ul>
          </div>

          <div className="dashboard-grid-icons grid grid-flow-row gap-4 place-items-start my-6 ">
            <h2 className="mb-2 uppercase font-bold">Zuri mini projects</h2>
            <ul className="grid grid-cols gap-4 Link-none">
              <Link to="#" className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <LuLayoutDashboard size={25} /> dashboard
              </Link>
              
              <Link  to="#" className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <PiClipboardTextThin size={25} /> Daily Task
              </Link>
              
              {/* project link and icon */}
              <Link  to="#" className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <SlFolderAlt size={25} /> projects
              </Link>
              

              {/* Road map link and icon */}
              <Link  to="#" className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <SlMap size={25} /> Roadmap
              </Link>

              {/* Groups */}
              <Link to="#" className="flex items-center gap-3 active:text-orange-300 active:delay-75">
              <TbUsersGroup size={25}/> Groups
            </Link>
              <Link to='#' className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <LuMessageSquareMore size={25} /> Messages
              </Link>
              
            </ul>

            <div className="grid grid-flow-row gap-4 place-items-start mt-6">
              

              {/* Setting link */}
              <Link to='#' className="flex items-center gap-3 active:text-orange-300 active:delay-75">
                <SlSettings size={25} /> Settings
              </Link>

              {/* Help */}
              <Link to='#' className="flex items-center gap-3 active:text-orange-300 active:delay-75">
              <TbMessage2Question size={25} /> Help

              </Link>

              {/* Logout link and icon */}
              <Link to='#' className="flex items-center gap-3 active:text-orange-300 active:delay-75 mt-12">
                <SlLogout size={25} /> Logout
              </Link>
            </div>
          </div>

        </div>

        {/* Add your dashboard layout here */}
        <div className="grid text-center border-2 border-orange-300">
          <h1>Dashboard</h1>
          <p>This is the dashboard page</p>
          <div className="col-span-12">
            {/* Add your dashboard content here */}
            <h1>Dashboard</h1>
            <p>Welcome to your Werk Remit dashboard!</p>
            <div className="flex items-center justify-between gap-4">
              <h2>Total Projects</h2>
              <span>12</span>
            </div>
          </div>
        </div>
        {/* Example: <Header /> */}

        {/* Example: <Content /> */}
        {/* Example: <Footer /> */}
      </div>
      {/* Add your dashboard components here */}
      {/* Example: <ProjectLinkst /> */}
      {/* Example: <ProjectForm /> */}
      {/* Example: <ProjectDetails /> */}
      {/* Example: <TaskCalendar /> */}
      {/* Example: <ProjectSettings /> */}
    </div>
  );
}

export default dashboard;
