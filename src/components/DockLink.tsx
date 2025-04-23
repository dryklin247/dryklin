'use client'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconPhone
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function DockLink() {
  const pathname = usePathname()

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className={`link ${pathname === '/' ? 'text-[#E86317]' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
      ),
      href: "/",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className={`link ${pathname === '/contact' ? 'text-[#E86317]' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
      ),
      href: "/contact",
    },
  ];
  return (
    <div className="flex border border-[#E86317] rounded-full md:hidden items-center justify-center fixed bottom-4.5 left-4 md:inset-x-0 z-90">
      <FloatingDock
        mobileClassName="" 
        items={links}
      />
    </div>
  );
}