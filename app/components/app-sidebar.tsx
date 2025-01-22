"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, Info, Contact, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const routes = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Contact size={20} />, },
  { name: "Search", path: "/search", icon: <Search size={20} />, },
  { name: "Settings", path: "/settings", icon: <Settings size={20} />, },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-xl font-semibold">Luminous Reborn</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {routes.map((route) => (
              <SidebarMenuItem key={route.path}>
                <SidebarMenuButton asChild isActive={pathname === route.path}>
                  <Link href={route.path}>
                    {route.icon}
                    <span>{route.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle/>
        {/* Add footer content here */}
      </SidebarFooter>
    </Sidebar>
  );
}
