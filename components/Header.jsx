import Link from "next/link";
import React from "react";

import Darkmode from "./Darkmode";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 4,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 5,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 6,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <header>
      <nav className={`h-[100px] flex justify-between items-center `}>
        <Link href={"/"}>
          <h1 className="font-bold text-3xl">Abhijeet Blog</h1>
        </Link>

        <div className="flex gap-6 items-center">
          <Darkmode />
          {links?.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}

          <LogoutBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
