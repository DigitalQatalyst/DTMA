"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, GraduationCap, LayoutDashboard } from "lucide-react";

// dashboard menu data
const dashboardMenuData = [
  {
    section: "Welcome",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard/learner-dashboard",
      },
      {
        title: "My Learning",
        icon: GraduationCap,
        href: "/dashboard/learner-my-learning",
      },
      {
        title: "Browse",
        icon: Globe,
        href: "/dashboard/learner-browse",
      },
    ],
  },
];

export default function StudentDashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="tpd-user-sidebar">
      <div className="tp-user-wrap">
        <div className="tp-user-menu">
          <nav>
            <ul>
              {dashboardMenuData.map((menuSection, i) => (
                <React.Fragment key={i}>
                  <li
                    className={`tp-user-menu-title ${
                      i !== 0 ? "space-gap" : ""
                    }`}
                  >
                    {menuSection.section}
                  </li>
                  <ul>
                    {menuSection.items.map((item, index) => {
                      const isActive = item.href === pathname;
                      const iconColor = isActive ? "#fff" : "gray"; // Active color white, else gray
                      return (
                        <li
                          key={index}
                          className="myside flex-row items-center"
                        >
                          <Link
                            className="flex-row items-center"
                            style={{
                              backgroundColor: isActive ? "#008080" : "",
                              color: isActive ? "#fff" : "",
                              padding: "10px",
                              borderRadius: "5px",
                            }}
                            href={item.href}
                          >
                            <span>
                              <item.icon color={iconColor} size={20} />
                            </span>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
