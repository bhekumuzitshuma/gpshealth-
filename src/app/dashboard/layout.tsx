"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { FaUser } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode; // Accept children as a prop
}

export default function DashboardLayout({ children }: LayoutProps) {
  const pathname = usePathname(); // Get the current pathname (optional, if you still need it)

  // Mock user data (replace this with actual user data from your authentication system)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* User Info Section */}
          <div className="flex items-center gap-3">
            <FaUser className="h-8 w-8 text-gray-500 rounded-full" />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children} {/* This will render the content of the page */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
