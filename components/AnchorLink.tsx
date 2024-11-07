"use client";
import Link from "next/link";

export default function AnchorLink({
  title,
  href,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link href={href} className="mt-2 uppercase underline-offset-4 z-20">
      {title}
    </Link>
  );
}
