import * as React from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { SearchForm } from "@/components/search-form";
import { HomeButton } from "./version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample data
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Livestock Monitoring",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Livestock Management",
          url: "/dashboard/livestock-monitoring/livestock-management",
        },
        {
          title: "Health Tracking",
          url: "/dashboard/livestock-monitoring/health-tracking",
        },
        {
          title: "Movement Tracking",
          url: "/dashboard/livestock-monitoring/movement-tracking",
        },
        {
          title: "Feeding Schedule",
          url: "/dashboard/livestock-monitoring/feeding-schedule",
        },
      ],
    },
    {
      title: "Alerts & Notifications",
      url: "#",
      items: [
        {
          title: "Health Alerts",
          url: "/dashboard/alerts/health-alerts",
        },
        {
          title: "Movement Alerts",
          url: "/dashboard/alerts/movement-alerts",
        },
        {
          title: "Feeding Reminders",
          url: "/dashboard/alerts/feeding-reminders",
        },
        {
          title: "Environmental Alerts",
          url: "/dashboard/alerts/environmental-alerts",
        },
      ],
    },
    {
      title: "Reports & Insights",
      url: "#",
      items: [
        {
          title: "Health Report",
          url: "/dashboard/reports/health-report",
        },
        {
          title: "Movement Report",
          url: "/dashboard/reports/movement-report",
        },
        {
          title: "Feeding Insights",
          url: "/dashboard/reports/feeding-insights",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <HomeButton />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url} // Check if the item is active
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
