import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary transition-all duration-300 ease-in-out">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu className="transition-transform duration-300 hover:scale-110" />
          <h1 className="font-bold text-lg transition-colors duration-300 hover:text-blue-500">
            {title}
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle className="transition-transform duration-300 hover:scale-110" />
          <UserNav className="transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
    </header>
  );
}
