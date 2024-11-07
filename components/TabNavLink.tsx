"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TabNavLinkProps = {
  href: string;
  title: string;
};

export default function TabNavLink({ href, title }: TabNavLinkProps) {
  const path = usePathname();
  const activeClassname = " bg-yellow shadow-tab";

  return (
    <li
      className={`rounded-tl-xl rounded-tr-xl px-2 pb-0.5 mx-1.5 uppercase text-xl font-medium relative top-1 text-black flex items-center hover:bg-yellow hover:shadow-tab hover:transition ${
        path === href ? activeClassname : ""
      }`}
    >
      <span className="w-3 h-3 ml-1 mr-2 border border-dashed rotate-45"></span>
      <Link href={href}>{title}</Link>
    </li>
  );
}
