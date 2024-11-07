"use client";
import Spinner from "@/components/Spinner";
import { Logo } from "./Logo";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { messages } from "@/lib/data/messages";

export default function Loading() {
  const [isLoading, setIsLoading] = useState("initial");

  useEffect(() => {
    setIsLoading(!sessionStorage.getItem("loaded") ? "true" : "false");
    setTimeout(() => {
      setIsLoading("false");
      sessionStorage.setItem("loaded", "true");
    }, messages.length * 2000);
  });

  if (isLoading === "initial") {
    return (
      <div className="w-full flex flex-col min-h-screen fixed top-0 left-0 gradient-retro page z-20 bg-radio" />
    );
  }

  return isLoading === "true" ? (
    <div className="w-full flex flex-col min-h-screen fixed top-0 left-0 gradient-retro page z-20 bg-radio">
      <header
        className={`border-b-white border-b border-dashed py-1 px-2 text-sm italic text-right`}
      >
        <small>v1.2.07</small>
      </header>
      <div className="p-12 flex flex-col">
        <div className="mx-auto">
          <Logo size={4} color="lime" />
          <h1 className="uppercase font-bold italic text-xl my-2">
            Welcome to the <br />
            <span className="text-3xl text-lime">STEM Citizen Database</span>
          </h1>
          <p className="text-sm">
            Hunting down friendly and effective employees since 1987
          </p>
        </div>
        <Spinner />
      </div>
      <Footer loggingIn />
    </div>
  ) : null;
}
