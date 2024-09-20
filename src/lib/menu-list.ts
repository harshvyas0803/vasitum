import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Calendar,
  User2,
  UserCircle,
  UserRoundSearchIcon,
  UserRoundCheckIcon,
  CircleAlert,
  Slack,
  Headphones,
  HeadphonesIcon,
  BookHeadphonesIcon,
  LucideBookHeadphones,
  Headset
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Recruitment",
          active: pathname.includes("/recruitment"),
          icon: SquarePen,
          submenus: [
            {
              href: "/recruitment",
              label: "Fresher",
              active: pathname === "/posts"
            },
            {
              href: "/recruitment/new",
              label: "Experienced",
              active: pathname === "/recruitment/new"
            }
          ]
        },
        {
          href: "/categories",
          label: "Schedule",
          active: pathname.includes("/categories"),
          icon: Calendar,
          submenus: []
        },
        {
          href: "/tags",
          label: "Employee",
          active: pathname.includes("/tags"),
          icon:UserRoundCheckIcon,
          submenus: []
        },
        {
          href: "/tags",
          label: "Department",
          active: pathname.includes("/tags"),
          icon:Slack,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Other",
      menus: [
        {
          href: "/users",
          label: "Support",
          active: pathname.includes("/users"),
          icon: Headset,
          submenus: []
        },
        {
          href: "/account",
          label: "Setting",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
