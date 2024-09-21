"use client";

import Link from "next/link";
import { LayoutGrid, LogOut, User } from "lucide-react"; // Consolidated imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquareMore } from 'lucide-react';
import { BellRing } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function UserNav({ name = "Admirra John", email = "admirraj@example.com" }) {
  return (
    <div className="flex items-center justify-between bg-transparent p-4">
      {/* Search Bar as an independent div */}
      <div className="flex-grow">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="border rounded-lg p-2 pl-10 pr-4 w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          {/* Search Icon inside the input */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5A6 6 0 108 10.5a6 6 0 008.5 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Notification and Message Icons on the right */}
      <div className="flex items-center ml-2 gap-4">
        <TooltipProvider disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="h-8 w-8 flex items-center justify-center border rounded cursor-pointer hover:border-[#0A337A] transition-colors">
                <MessageSquareMore className="w-4 h-4 text-gray-500 hover:text-[#0A337A]" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">Messages</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="h-8 w-8 flex items-center justify-center border rounded cursor-pointer hover:border-[#0A337A] transition-colors">
                <BellRing className="w-4 h-4 text-gray-500 hover:text-[#0A337A]" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">Notification</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Profile Dropdown Menu */}
        <DropdownMenu>
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <div className="relative h-8 w-8 rounded-full cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="../profile.png" alt="Profile Image" />
                      <AvatarFallback className="bg-transparent">{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-xs leading-none text-muted-foreground">{email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:cursor-pointer" asChild>
                <Link href="/dashboard" className="flex items-center">
                  <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer" asChild>
                <Link href="/account" className="flex items-center">
                  <User className="w-4 h-4 mr-3 text-muted-foreground" />
                  Account
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer" onClick={() => {}}>
              <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
