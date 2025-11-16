"use client";

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface NavItemsProps {
  asDropdownItems?: boolean;
}

export default function NavItems({ asDropdownItems = false }: NavItemsProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  if (asDropdownItems) {
    return (
      <>
        {NAV_ITEMS.map((item) => (
          <DropdownMenuItem key={item.href} className="w-full">
            <Link
              href={item.href}
              className={`w-full hover:text-yellow-500 transition-colors ${
                isActive(item.href) ? "text-gray-100" : ""
              }`}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </>
    );
  }

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(item.href) ? "text-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
