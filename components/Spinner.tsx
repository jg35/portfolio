import { useState, useEffect } from "react";
import { messages } from "@/lib/data/messages";
import { Logo } from "./Logo";

export default function Spinner() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === messages.length - 1) {
        setLoading(false);
        clearInterval(interval);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  if (!loading) return null;

  return (
    <>
      <div className="h-60 mb-4 flex justify-center items-center">
        <Logo size={24} color="white" loading={loading} />
      </div>
      <div className="text-center">
        <p className="font-bold uppercase mb-3">loading...</p>
        <p className="uppercase italic text-xs">{messages[index]}</p>
      </div>
    </>
  );
}
