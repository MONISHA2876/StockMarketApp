import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const user: { name: string } = { name: "Mona" };

  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link className="header-logo" href="/">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            height={32}
            width={140}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:inline-block">
          <NavItems />
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/185104871?v=4"
                alt="User Avatar"
                className="cursor-pointer"
              />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 cursor-pointer">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center">
              <Avatar className="inline-block">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/185104871?v=4"
                  alt="User Avatar"
                />
                <AvatarFallback className="bg-yellow-500 text-yellow-900">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
              <span className="ml-2">{user.name}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="inline-block sm:hidden">
              <NavItems asDropdownItems />
            </div>
            <DropdownMenuSeparator className="inline-block sm:hidden" />
            <DropdownMenuItem>
              <Link href="/sign-in">Sign Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
} 