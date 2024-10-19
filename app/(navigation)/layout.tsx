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
              <a href="/work">work</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
