import React, { useState, useEffect } from "react";
import { icons } from "../utils/contants";
import { SocialIcon } from "react-social-icons";

function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full top-0 sticky z-[1] flex flex-row items-center justify-between font-mono bg-white p-2 m-auto ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div>
        {icons.map((icon) => (
          <SocialIcon
            key={icon.id}
            url={icon.url}
            fgColor="black"
            bgColor="transparent"
          />
        ))}
      </div>
      <div>
      </div>
    </header>
  );
}

export default Header1;
