"use client";

import { useContext } from "react";
import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const { onClose } = useContext(DrawerContext);
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-oreground text-primary-foreground"
        )}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}
