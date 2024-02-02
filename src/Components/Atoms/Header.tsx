import React, { useState, useEffect } from "react";
import { TaviaDark } from "../../assets";

export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div
      className={`px-[6%] py-2 fixed z-10 w-screen ${
        active ? "bg-white/80 border-b" : "bg-transparent"
      }`}
    >
      <img src={TaviaDark} alt="" className="h-16 md:h-12" />
    </div>
  );
}
