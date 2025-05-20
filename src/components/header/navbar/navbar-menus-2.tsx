import Link from "next/link";
import { menu_data_2 } from "@/data/menu-data";
import NavHomeDropdown from "./dropdown/nav-home-dropdown";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import NavAcademicDropdown from "./dropdown/nav-academic-dropdown";
import NavCourseDropdown from "./dropdown/nav-course-dropdown";

interface MenuItem {
  title: string;
  link: string;
}

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');
const plainMenuData: MenuItem[] = [ // Moved here to avoid potential issues.
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Catalog", link: "/catalog" },
  { title: "Resources", link: "/resources" },
  { title: "Contact", link: "/contact" },
];

export default function NavbarMenusTwo() {
  return (
    // <nav className="tp-main-menu-content">
    //   <ul>
    //     {menu_data_2.map((menu) => (
    //       <li
    //         key={menu.id}
    //         className={`has-dropdown ${
    //           menu.home_dropdown ||
    //           menu.academic_dropdown ||
    //           menu.course_dropdown ||
    //           menu.pages_dropdown
    //             ? "tp-static"
    //             : ""
    //         }`}
    //       >
    //         <Link href={menu.link}>{menu.title}</Link>

    //         {menu.home_dropdown && (
    //           <div className="tp-megamenu-main tp-megamenu-container">
    //             <NavHomeDropdown home_dropdown={menu.home_dropdown} />
    //           </div>
    //         )}

    //         {menu.academic_dropdown && (
    //           <div className="tp-megamenu-main tp-megamenu-academics">
    //             <NavAcademicDropdown academic_dropdown={menu.academic_dropdown} />
    //           </div>
    //         )}

    //         {menu.course_dropdown && (
    //           <div className="tp-megamenu-main tp-megamenu-courses">
    //             <NavCourseDropdown course_dropdown={menu.course_dropdown} />
    //           </div>
    //         )}

    //         {menu.dashboard_dropdown && (
    //           <ul className="tp-submenu">
    //             {menu.dashboard_dropdown.map((dpm) => (
    //               <li key={dpm.id} className="has-dropdown">
    //                 <Link href={dpm.link}>{dpm.title}</Link>
    //                 <ul className="tp-submenu">
    //                   {dpm.dropdown_menus.map((dm) => (
    //                     <li key={dm.id}>
    //                       <Link href={dm.link}>{dm.title}</Link>
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </li>
    //             ))}
    //           </ul>
    //         )}

    //         {menu.pages_dropdown && (
    //           <div className="tp-megamenu-main tp-megamenu-fullwidth">
    //             <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
    //           </div>
    //         )}

    //         {menu.dropdown_menus && (
    //           <ul className="tp-submenu">
    //             {menu.dropdown_menus.map((dm) => (
    //               <li key={dm.id}>
    //                 <Link href={dm.link}>{dm.title}</Link>
    //               </li>
    //             ))}
    //           </ul>
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <nav className="tp-main-menu-content">
      <ul className="flex space-x-6 ml-10"> {/* Use flexbox for horizontal layout */}
        {plainMenuData.map((menu) => (
          <li key={menu.title} className="relative group">
            <a
              href={menu.link}
              className={cn(
                "text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300", // Basic styling
                "after:block after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0", // Underline styles
                "after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full" // Underline animation
              )}
            >
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
  
}
