import React from "react";

export function Logo({
  size = 4,
  color = "white",
  loading = false,
}: {
  size?: 4 | 24;
  color?: "white" | "lime";
  loading?: boolean;
}) {
  const sizeClass = {
    4: "size-4",
    24: "size-24",
  };

  const borderClass = {
    white: "border-white",
    lime: "border-lime",
  };
  return (
    <div
      className={`rotate-45 logo ${sizeClass[size]} ${borderClass[color]} ${
        loading ? "loading" : ""
      }`}
    />
  );
}
