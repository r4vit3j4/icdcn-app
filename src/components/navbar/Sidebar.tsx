import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger aria-controls="radix-:R9cq:">
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">HeteroComp24</SheetTitle>
        </SheetHeader>
        <div className="mt-10">
          <ul className="flex flex-col gap-4">
            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className={cn(
                    "text-muted-foreground transition hover:text-primary w-full",
                    pathname === "/" && "text-primary font-medium"
                  )}
                >
                  Home
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/papers"
                  className={cn(
                    "text-muted-foreground transition hover:text-primary w-full",
                    pathname === "/papers" && "text-primary font-medium"
                  )}
                >
                  Call for Papers
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/committee"
                  className={cn(
                    "text-muted-foreground transition hover:text-primary w-full",
                    pathname === "/committee" && "text-primary font-medium"
                  )}
                >
                  Committee
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/workshop"
                  className={cn(
                    "text-muted-foreground transition hover:text-primary w-full",
                    pathname === "/workshop" && "text-primary font-medium"
                  )}
                >
                  Workshop Program
                </Link>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
