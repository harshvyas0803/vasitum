import Link from "next/link";
import Image from "next/image";
 
import { ArrowRightIcon, } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
           
          
            <span className="font-bold">

            <Image 
          src="/logo.png"    // Path relative to the public directory
          alt="Company Logo"  // Alternative text for accessibility
          width={150}         // Set width (can be any value or percentage)
          height={50}         // Set height (can be any value or percentage)
        />


            </span>
            <span className="sr-only">vyas sidebar</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
          
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Open the dashboard
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              A stunning and functional retractable sidebar for Next.js is
             complete with desktop and mobile responsiveness.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Click Here!
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
             
            </div>
          </section>
         
        </div>
      </main>
   
    </div>
  );
}
