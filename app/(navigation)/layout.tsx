import AnchorLink from "@/components/AnchorLink";

export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <AnchorLink href="/">home</AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
