import React from "react";

export default function Header({
  text = "STEM Citizen Database v1.2.07",
}: {
  text?: string;
}) {
  return (
    <header
      className={`border-b-white border-b border-dashed py-1 w-full px-2 text-sm italic text-center bg-green-dark sticky top-0 z-10`}
    >
      <small>{text}</small>
    </header>
  );
}
