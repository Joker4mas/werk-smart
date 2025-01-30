import { NavLink, Outlet } from "@remix-run/react";
import { Home, LayoutDashboard, Users, Settings } from "lucide-react";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-3">
            {[
              {
                to: "/dashboard",
                label: "Overview",
                icon: <LayoutDashboard />,
              },
              { to: "/dashboard/users", label: "Users", icon: <Users /> },
              {
                to: "/dashboard/settings",
                label: "Settings",
                icon: <Settings />,
              },
            ].map(({ to, label, icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md transition ${
                      isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                    }`
                  }
                >
                  {icon} <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around">
        {[
          { to: "/dashboard", icon: <Home size={20} />, label: "Home" },
          { to: "/dashboard/users", icon: <Users size={20} />, label: "Users" },
          {
            to: "/dashboard/settings",
            icon: <Settings size={20} />,
            label: "Settings",
          },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`
            }
          >
            {icon}
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-5 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
