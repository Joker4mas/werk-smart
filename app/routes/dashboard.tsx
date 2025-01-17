import { LuLayoutDashboard } from "react-icons/lu";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { SlMap, SlFolderAlt, SlLogout, SlSettings } from "react-icons/sl";
import { RiRoadMapLine } from "react-icons/ri";
import { FaFolder } from "react-icons/fa6";
import {
  PiClipboardTextThin,
  PiGreaterThan,
  PiGreaterThanThin,
} from "react-icons/pi";
import { Link } from "@remix-run/react";
import { FaGreaterThan } from "react-icons/fa";
function dashboard() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="grid-Container grid grid-flow-col">
        {/* Example: <Sidebar /> */}
        <div className="side-bar border-2 border-gray-700 w-56 bg-primary p-4 h-screen text-white">
          <div className="sideBar-logo">
            <img src="/public/logo-side.png" alt="" />
          </div>

          <div className="workSpace-container grid grid-cols-1 gap-2 border-2 border-rose-500 place-items-center">
            <h2>Workspaces</h2>
            <ul className="workSpace-list flex flex-row">
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-300">
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
                <FaGreaterThan />
                <PiGreaterThan />
                <PiGreaterThanThin />
              </li>
            </ul>
          </div>

          <LuLayoutDashboard size={32} />
          <GiNotebook size={32} />
          <PiClipboardTextThin size={32} />
          <RiRoadMapLine size={32} />
          <FaFolder size={32} />
          <SlMap size={32} />
          <SlFolderAlt size={32} />
          <SlLogout size={32} />
          <SlSettings size={32} />
          <AiOutlineMessage size={32} />

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
