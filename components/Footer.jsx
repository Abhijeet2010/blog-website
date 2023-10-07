import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between h-[50px]">
      <h3>@Copyright Reserved Abhijeet Raut</h3>

      <div className="flex gap-8">
        <Link
          href={"https://in.linkedin.com/in/raut-abhijeet"}
          target="_blank"
          title="linkdin"
        >
          <Image src="/linkedin.png" height={24} width={24} alt="linkedin" />
        </Link>

        <Link href={"https://github.com/"} target="_blank" title="github">
          <Image src="/github.png" height={24} width={24} alt="github" />
        </Link>

        <Link
          href={"mailto:https://gmail.com/abhijeetraut220@gmail.com"}
          target="_blank"
          title="gmail"
        >
          <Image src="/gmail.png" height={24} width={24} alt="gmail" />
        </Link>

        <Link href={"/"} target="_blank" title="instagram">
          <Image src="/instagram.png" height={24} width={24} alt="instagram" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
