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
  LuChevronLeft,
  LuLink2,
} from "react-icons/lu";
import ProgBars from "../components/ProgBar";
import { GiSandsOfTime } from "react-icons/gi";
import { LiaComments } from "react-icons/lia";
import { PiTimerLight } from "react-icons/pi";
import { Link } from "@remix-run/react";
import { TbUsersGroup } from "react-icons/tb";
import { Divider } from "rsuite";

function dashboard() {
  return (
    <div className="main-container grid grid-cols-5  text-black bg-slate-200">
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
              to="/"
              className="flex items-center gap-3 active:text-orange-300 active:delay-75 mt-4"
            >
              <LuLogOut size={25} /> Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Add your dashboard layout here */}
      <div className="col-start-2 col-end-6 px-4">
        <div className="top-grid  max-h-24  mt-2 shadow-md">
          <div className="flex--container grid grid-flow-col p-4">
            {/* Welcome header text */}
            <div
              className="welcome-note  grid 
              items-center gap-2"
            >
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

            {/* Search and notification */}
            <div className="right-header flex justify-between items-center gap-24">
              <div className="grid-headerDash grid grid-cols-2 gap-4 justify-between items-center  mx-auto ">
                <LuSearch size="32" className="cursor-pointer" />
                <div className="notification relative">
                  <LuBell size={32} />
                  <div
                    className="dot
                    w-2 h-2 bg-rose-600
                    absolute top-0
                    left-5 rounded-full border-2 border-rose-600"
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
              {/* User profile */}
              <div className="profile-im flex items-center gap-8 ">
                <img
                  src="/public/user1.png"
                  alt="user one"
                  className="w-10 rounded-full "
                />
                <div className="user--details grid grid-flow-row text-start">
                  <span className="font-bold">John Doe</span>
                  <div className="profile flex items-center gap-8">
                    <span className=" text-gray-400">jogndoe@gmail.com</span>
                    <LuChevronDown size={24} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="grid mt-8  ">
          {/* flex-grid container for charts*/}
          <div
            className="flex flex-row justify-between max-w-full "
            id="charts"
          >
            {/* Task overview board */}
            <div className="task--overview flex flex-col shadow-md  gap-2 rounded-lg w-64 h-40 ">
              <div className="top--text flex gap-2 text-left relative ">
                <p className="font-bold uppercase text-md">Task overview</p>{" "}
                <span className="text-sm text-gray-400 absolute bottom-0 translate-x-36">
                  Today
                </span>
              </div>
              <div className="card-chart mx-auto">
                <ProgBars progress={50} text="Completed" />
              </div>
              <div className="right--bottom-text flex items-end relative ">
                <span className="flex gap-2 items-center  absolute translate-x-36 translate-y-4 mt-2 text-sm text-gray-400 bottom-0">
                  View details <LuMoveRight />
                </span>
              </div>
            </div>

            {/* right-grid-box */}
            <div className="overview flex flex-col gap-4  h-40 p-4 rounded-lg shadow-md">
              <div className="top--text text-left ">
                Overall project overview
              </div>
              <div className="project--progress border ">
                <ul className="grid grid-flow-col-dense  gap-8 place-content-center place-items-center">
                  <li className="grid place-content-center">
                    <span className="number font-bold text-4xl text-center">
                      12
                    </span>
                    <p className="my-1 text-gray-400">Upcoming</p>
                  </li>
                  <Divider className="border h-10 w-0 border-gray-400" />
                  <li className="grid place-content-center">
                    <span className="number font-bold text-4xl text-center">
                      3
                    </span>
                    <p className="my-1 text-gray-400">In Progress</p>
                  </li>
                  <Divider className="border h-10 w-0 border-gray-400" />
                  <li className="grid place-content-center">
                    <span className="number font-bold text-4xl text-center">
                      1
                    </span>
                    <p className="my-1 text-gray-400">Under Review</p>
                  </li>
                  <Divider className="border h-10 w-0 border-gray-400" />
                  <li className="grid place-content-center">
                    <span className="number font-bold text-4xl text-center">
                      4
                    </span>
                    <p className="my-1 text-gray-400">Completed</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Calender, Task and Testimonials */}
        <div className="calender--testimonial grid">
          {/* calender and task section */}
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            {/* flex-grid container for charts*/}
            <div
              className="flex flex-row justify-between max-w-full gap-4  "
              id="charts"
            >
              {/* Task & Calender */}
              <div className="task--overview grid shadow-md gap-4 rounded-lg ">
                <div className="calender p-2">
                  <div className="mont-year p-2 max-w-max">
                    <div className="month-year flex mb-4 justify-between">
                      <p className="text-xl font-bold">March 2023</p>
                      <div className="right-aligned flex gap-4">
                        <div className="prev-month cursor-pointer">
                          <LuChevronLeft size={24} />
                        </div>
                        <div className="next-month cursor-pointer">
                          <LuChevronRight size={24} />
                        </div>
                      </div>
                    </div>

                    {/* week days */}
                    <div className="days">
                      <ul className="grid grid-cols-7 gap-6">
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Sun</span>
                          <span>5</span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Mon</span>
                          <span>6</span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Tues</span>
                          <span>7</span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Wed</span>
                          <span className="bg-blue-800 text-white rounded-full w-8 p-1   text-center shadow-lg">
                            43
                          </span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Thu</span>
                          <span>9</span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Fri</span>
                          <span>10</span>
                        </li>
                        <li className="grid gap-2 place-items-center place-content-center">
                          <span className="text-md text-gray-400">Sat</span>
                          <span>11</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="task-container border-2 border-blue-700 rounded-lg flex gap-2 mt-4 p-1 max-h-fit">
                    <div className="right-icon max-w-fit">
                      <LuNotepadText
                        size={46}
                        className=" text-blue-800 text-center mx-1"
                      />
                    </div>
                    <div className="notification grid col-start-2 col-end-5 place-content-between">
                      <p className="font-bold">Design Hero Section</p>
                      <ul className="flex gap-2 my-2">
                        <li className="flex items-center">
                          <PiTimerLight /> <span className="text-sm">9.am</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <GiSandsOfTime />{" "}
                          <span className="text-sm">2 hrs</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <LuLink2 />{" "}
                          <span className="text-sm">www.figma.com</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <LiaComments />{" "}
                          <span className="text-sm">5 comments</span>
                        </li>
                      </ul>
                    </div>
                    <div className="lapsed-time">
                      <ProgBars progress={20} text=" left" />
                    </div>
                  </div>

                  <div className="task-container border-2 border-blue-700 rounded-lg  flex gap-2  mt-2 p-2">
                    <div className="right-icon">
                      <LuNotepadText
                        size={46}
                        className="text-blue-800 text-center mx-1 "
                      />
                    </div>
                    <div className="notification grid col-start-2 col-end-6 place-content-between">
                      <p className="font-bold">Design Hero Section</p>
                      <ul className="flex gap-2 my-2">
                        <li className="flex items-center">
                          <PiTimerLight /> <span className="text-sm">9.am</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <GiSandsOfTime />{" "}
                          <span className="text-sm">2 hrs</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <LuLink2 /> <span className="text-sm">figma.com</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <LiaComments />{" "}
                          <span className="text-sm">5 commts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="lapsed-time grid items-center">
                      <div className="flex gap-1  bg-blue-700 p-2  rounded-lg text-white items-center">
                        <PiTimerLight />
                        <span className="text-sm">Reminders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right-grid-box */}
              <div className="flex flex-col flex-auto  rounded-lg p-4">
                <div className="top--text flex flex-row  justify-between items-center ">
                  <p className="text-xl font-bold">Activity </p>
                  <div className="dots flex gap-1 font-bold ">
                    <span className="border-2 border-gray-500 rounded-full  p-0.5 hover:cursor-pointer hover:border-blue-700"></span>
                    <span className="border-2 border-gray-500 rounded-full p-0.5 hover:cursor-pointer hover:border-blue-700"></span>
                    <span className="border-2 border-gray-500 rounded-full p-0.5 hover:cursor-pointer hover:border-blue-700"></span>
                  </div>
                </div>

                <div className="test-monial w-96 ">
                  <div className="floyd mt-6">
                    <div className="profile-floyd flex items-center gap-4">
                      <div className="wrapper relative">
                        <img
                          src="/public/user2.png"
                          alt="floyd's"
                          className="w-16 rounded-full"
                        />
                        <div className="absolute right-0 bottom-1 bg-slate-50 rounded-full p-1">
                          <LuLink2 />
                        </div>
                      </div>
                      <div className="profile-details grid gap-2">
                        <p className="font-bold text-sm">Floyd Miles</p>
                        <span className="text-gray-400 text-sm">
                          Today, 9.46 Am
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="test-monial-text p-2 grid ml-16">
                    <p className="text-stone-600 font-bold text-sm">
                      Added a file to
                      <Link to="#" className="text-blue-700">
                        Sign up Page Project
                      </Link>
                    </p>

                    <div className="flex  gap-2  w-fit ">
                      <div className="innerWrap flex flex-col shadow-lg rounded-lg p-2 mt-2 i">
                        <div className="header-text flex items-center gap-2">
                          <div className="custom-icon">
                            <img
                              src="/public/figma.png"
                              alt=""
                              className="h-6"
                            />
                          </div>
                          <span>
                            <p className="text-sm">Custom Icon set.Fig</p>
                            <span className="text-sm text-gray-400">
                              500 kb
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="grid p-2 m h-18 text-center  items-center shadow-lg rounded-lg text-sm">
                        <p className="my-auto">+ 6</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test-monial ">
                  <div className="floyd mt-2">
                    <div className="profile-floyd flex items-center gap-4">
                      <div className="wrapper relative">
                        <img
                          src="/public/user2.png"
                          alt="floyd's"
                          className="w-16 rounded-full"
                        />
                        <div className="absolute right-0 bottom-1 bg-slate-50 rounded-full p-1">
                          <LuLink2 />
                        </div>
                      </div>
                      <div className="profile-details grid gap-2">
                        <p className="font-bold text-sm">Floyd Miles</p>
                        <span className="text-gray-400 text-sm">
                          Today, 9.46 Am
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="test-monial-text p-2 grid ml-16">
                    <p className="text-stone-600 font-bold text-sm">
                      Added a file to
                      <Link to="#" className="text-blue-700">
                        Sign up Page Project
                      </Link>
                    </p>

                    <div className="flex  gap-2  w-fit ">
                      <div className="innerWrap flex flex-col shadow-lg rounded-lg p-2 mt-2 i">
                        <div className="header-text flex items-center gap-2">
                          <div className="custom-icon">
                            <img
                              src="/public/figma.png"
                              alt=""
                              className="h-6"
                            />
                          </div>
                          <span>
                            <p className="text-sm">Custom Icon set.Fig</p>
                            <span className="text-sm text-gray-400">
                              500 kb
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="grid p-2 m h-18 text-center  items-center shadow-lg rounded-lg text-sm">
                        <p className="my-auto">+ 6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
