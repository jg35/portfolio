import React from "react";
import AnchorLink from "./AnchorLink";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center circular bg-blue pb-4 mt-4 w-full overflow-x-clip relative">
      <div>
        <AnchorLink href="/">home</AnchorLink>
      </div>
      <small className="text-xs">
        © 2024 by James Graham. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
