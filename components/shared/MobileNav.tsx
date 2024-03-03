"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MenuLinks from "./MenuLinks";

const MobileNav = () => {
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/imaginlogo.png"
          height={35}
          width={45}
          alt="logo"
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              className="cursor-pointer"
              height={32}
              width={32}
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/imaginlogo.png"
                alt=""
                width={70}
                height={32}
                className="scale-150"
              />
              <MenuLinks start={0} end={9} />
              <ul>
                <li className="cursor-pointer gap-2">
                  <UserButton afterSignOutUrl="/" showName />
                </li>
              </ul>
            </>
          </SheetContent>
        </Sheet>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
