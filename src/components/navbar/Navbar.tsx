"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full py-4 border-b bg-white/10 backdrop-blur-sm z-50">
      <div className="container flex items-center justify-between gap-4">
        <div>
          <Link href="/" className="font-semibold">
            ICDCN 2024
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Sidebar />
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/"
                className={cn(
                  "text-muted-foreground transition hover:text-primary",
                  pathname === "/" && "text-primary font-medium"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/papers"
                className={cn(
                  "text-muted-foreground transition hover:text-primary",
                  pathname === "/papers" && "text-primary font-medium"
                )}
              >
                Call for Papers
              </Link>
            </li>
            <li>
              <Link
                href="/committee"
                className={cn(
                  "text-muted-foreground transition hover:text-primary",
                  pathname === "/committee" && "text-primary font-medium"
                )}
              >
                Committee
              </Link>
            </li>
            <li>
              <Link
                href="/workshop"
                className={cn(
                  "text-muted-foreground transition hover:text-primary",
                  pathname === "/workshop" && "text-primary font-medium"
                )}
              >
                Workshop Program
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
