"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, User, Settings, LogOut } from "lucide-react";

const routes = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Profile", path: "/profile", icon: <User size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">MyApp</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors",
                  pathname === route.path
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                )}
              >
                {route.icon}
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
