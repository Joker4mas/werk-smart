import {
  LuLayoutDashboard,
  LuMessageSquareMore,
  LuNotepadText,
  LuFolder,
  LuChevronRight,
  LuBell,
  LuLogOut,
  LuMap,
  LuMessageSquareWarning,
  LuSettings,
  LuMoveRight,
  LuSearch,
  LuChevronDown,
} from "react-icons/lu";
import { Link } from "@remix-run/react";
import { TbUsersGroup } from "react-icons/tb";

function dashboard() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="grid-Container grid grid-flow-col auto-cols-max ">
        {/* Example: <Sidebar /> */}
        <div className="side-bar  bg-primary p-4  text-white max-w-fit">
          <div className="sideBar-logo">
            <img src="/public/logoWhite.png" alt="" />
          </div>

          <div className="workSpace-container grid grid-cols-1 gap-2 place-items-start my-6 text-start">
            <h2 className="text-start">Workspaces</h2>
            <ul className="workSpace-Link flex flex-row items-center ">
              <Link to="/" className="block px-4 py-2   overflow-hidden">
                <img src="/public/Ellipse1.png" alt="Work space logo one" />
              </Link>
              <Link to="/" className="block px-4 py-2 ">
                <img src="/public/Ellipse-2.png" alt=" work space logo two" />
              </Link>
              <Link to="/" className="block px-4 py-2">
                <img src="/public/Ellipse3.png" alt="work space logo three" />
              </Link>
              <Link to="#">
                <LuChevronRight />
              </Link>
            </ul>
          </div>

          <div className="dashboard-grid-icons grid grid-flow-row gap-4 place-items-start my-6 ">
            <h2 className="mb-2 uppercase font-bold">Zuri mini projects</h2>
            <ul className="grid grid-cols gap-4 Link-none">
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuLayoutDashboard size={25} /> dashboard
              </Link>

              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuNotepadText size={25} /> Daily Task
              </Link>

              {/* project link and icon */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuFolder size={25} /> projects
              </Link>

              {/* Road map link and icon */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuMap size={25} /> Roadmap
              </Link>

              {/* Groups */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <TbUsersGroup size={25} /> Groups
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuMessageSquareMore size={25} /> Messages
              </Link>
            </ul>

            <div className="grid grid-flow-row gap-4 place-items-start mt-4">
              {/* Setting link */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuSettings size={25} /> Settings
              </Link>

              {/* Help */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75"
              >
                <LuMessageSquareWarning size={25} /> Help
              </Link>

              {/* Logout link and icon */}
              <Link
                to="#"
                className="flex items-center gap-3 active:text-orange-300 active:delay-75 mt-4"
              >
                <LuLogOut size={25} /> Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Add your dashboard layout here */}
        <div className="grid max-w-full text-center border-2 border-orange-300 h-52">
          <div
            className="top-grid w-full grid
          grid-cols-3 row-auto auto-cols-fr justify-between
         border-2 border-rose-700  p-2"
          >
            <div className="welcome-note  grid items-center place-content-center gap-2">
              <span className="text-xl font-bold ">Welcome Back, John</span>
              <Link
                to="#"
                className="resume-link  flex
              items-center gap-2"
              >
                Resume where you left off?
                <LuMoveRight className="active:text-orange-400" />
              </Link>
            </div>
            <div className="grid-headerDash grid grid-cols-2 gap-8 justify-between items-center  mx-auto ">
              <LuSearch size="32" />
              <div className="notification relative">
                <LuBell size={32} />
                <div className="dot 
                w-2 h-2 bg-rose-600
                absolute top-0 
                left-5 rounded-full border-2 border-rose-600">&nbsp;</div>
              </div>
            </div>
            <div className="profile-im flex items-center gap-10 p-2 ">
              <img src="/public/user1.png" alt="user one" className="w-16 rounded-full " />
              <div className="user--details grid grid-flow-row text-start">
                <span className="font-bold">John Doe</span>
                <div className="profile flex items-center gap-8">
                  <span className=" text-gray-400">jogndoe@gmail.com
                  </span>
                                <LuChevronDown size={24}/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-300">
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
        </div>
        {/* Example: <Header /> */}

        {/* Example: <Content /> */}
        {/* Example: <Footer /> */}
        {/* Example: <ProjectLinkst /> */}
        {/* Example: <ProjectForm /> */}
        {/* Example: <ProjectDetails /> */}
        {/* Example: <TaskCalendar /> */}
        {/* Example: <ProjectSettings /> */}
      </div>
    </div>
  );
}

export default dashboard;
