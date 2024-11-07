import React from "react";
import { tabs as tabNavigation } from "@/lib/data/nav";
import TabNavLink from "./TabNavLink";

export default function TabNav() {
  return (
    <nav className="min-h-screen max-h-screen w-8 gradient-lime z-10 overflow-hidden sticky top-0">
      <ul className="flex rotate-90 translate-x-4 w-h-screen origin-left">
        {tabNavigation.map(({ href, title }) => (
          <TabNavLink href={href} title={title} key={href} />
        ))}
      </ul>
    </nav>
  );
}
