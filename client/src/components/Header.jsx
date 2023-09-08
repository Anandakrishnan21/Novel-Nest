import React, { useState, useEffect } from "react";
import { icons } from "../utils/contants";
import { SocialIcon } from "react-social-icons";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Header() {
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
        <button>
          <Link to="create" className="flex items-center justify-center gap-2">
            <PlusCircleIcon className="w-10 h-10 text-green-600" />
            <p className="text-xl font-bold">Create Post</p>
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
