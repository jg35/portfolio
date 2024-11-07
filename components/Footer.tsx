import React from "react";

const Footer = ({ loggingIn = false }: { loggingIn?: boolean }) => {
  // const random = Math.round(Math.random() * 10000);
  return (
    <footer className="mt-auto border-t-white border-t border-dashed py-2 bottom-0 w-full">
      <span className="normal-case text-center text-xs block">
        {loggingIn ? "Logging" : "Logged"} in as unknown operator #2343
      </span>
    </footer>
  );
};

export default Footer;
