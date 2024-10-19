import React from "react";
import Link from "next/link";

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_self" | "_blank";
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  href,
  children,
  className,
  target = "_self",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`text-blue underline font-semibold ${className}`}
    >
      {children}
    </Link>
  );
};

export default AnchorLink;
