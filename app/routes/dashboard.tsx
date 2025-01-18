import { LuLayoutDashboard } from "react-icons/lu";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { SlMap, SlFolderAlt, SlLogout, SlSettings } from "react-icons/sl";
import { RiRoadMapLine } from "react-icons/ri";
import {
  PiClipboardTextThin,
  PiFolderThin,
  PiGreaterThanThin,
} from "react-icons/pi";
import { Link } from "@remix-run/react";
function dashboard() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="grid-Container grid grid-flow-col">
        {/* Example: <Sidebar /> */}
        <div className="side-bar border-2 border-gray-700 w-60 bg-primary p-4 h-screen text-white">
          <div className="sideBar-logo">
            <img src="/public/logo-side.png" alt="" />
          </div>

          <div className="workSpace-container grid grid-cols-1 gap-2 place-items-start my-6 text-start">
            <h2 className="text-start">Workspaces</h2>
            <ul className="workSpace-list flex flex-row items-center ">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-300  overflow-hidden"
                >
                  <img src="/public/Ellipse1.png" alt="Work space logo one" />
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-300">
                  <img src="/public/Ellipse-2.png" alt=" work space logo two" />
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-300">
                  <img src="/public/Ellipse3.png" alt="work space logo three" />
                </Link>
              </li>
              <li>
                <PiGreaterThanThin />
              </li>
            </ul>
          </div>

          <div className="dashboard-grid-icons grid grid-flow-row gap-4 place-items-start my-6 border-2 border-green-400">
            <ul>
              <li>
                <LuLayoutDashboard size={25} /> dashboard
              </li>
              <li>
                <GiNotebook size={25} />
              </li>
              <li>
                <PiClipboardTextThin size={25} />
              </li>
              <li>
                <RiRoadMapLine size={25} />
              </li>
              <li>
                <PiFolderThin size={25} />
              </li>
              <li>
                <SlMap size={25} />
              </li>
              <li>
                <SlFolderAlt size={25} />
              </li>
              <li>
                <SlLogout size={25} />
              </li>
              <li>
                <SlSettings size={25} />
              </li>
              <li>
                <AiOutlineMessage size={25} />
              </li>
            </ul>
          </div>

          <h2>Dashboard</h2>
        </div>

        {/* Add your dashboard layout here */}
        <div className="grid text-center">
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
      {/* Example: <ProjectList /> */}
      {/* Example: <ProjectForm /> */}
      {/* Example: <ProjectDetails /> */}
      {/* Example: <TaskCalendar /> */}
      {/* Example: <ProjectSettings /> */}
    </div>
  );
}

export default dashboard;
