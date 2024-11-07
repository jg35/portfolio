"use client";
import Spinner from "@/components/Spinner";
import { Logo } from "./Logo";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { messages } from "@/lib/data/messages";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(
    sessionStorage.getItem("loaded") ? false : true
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("loaded", "true");
    }, messages.length * 2000);
  });

  return isLoading ? (
    <div className="flex flex-col min-h-screen fixed top-0 left-0 gradient-retro page z-20 bg-radio">
      <header
        className={`border-b-white border-b border-dashed py-1 px-2 text-sm italic text-right`}
      >
        <small>v1.2.07</small>
      </header>
      <div className="p-12">
        <Logo size={4} color="lime" />
        <h1 className="uppercase font-bold italic text-xl my-2">
          Welcome to the <br />
          <span className="text-3xl text-lime">STEM Citizen Database</span>
        </h1>
        <p className="text-sm">
          Hunting down friendly and effective employees since 1987
        </p>
        <Spinner />
      </div>
      <Footer loggingIn />
    </div>
  ) : null;
}
