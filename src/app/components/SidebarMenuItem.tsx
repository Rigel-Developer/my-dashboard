"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuItemProps {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  path: string;
}

export const SidebarMenuItem = ({
  icon,
  path,
  subTitle,
  title,
}: SidebarMenuItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === path ? "bg-blue-800" : "";
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive} hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
      
    </Link>
  );
};
