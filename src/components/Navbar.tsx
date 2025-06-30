import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../img/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Navbar = () => {
  return (
    <div
      className="bg-primary dark:bg-slate-700 py-2 px-5 justify-between 
    text-white flex"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>


      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'><Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/auth">Logout</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
