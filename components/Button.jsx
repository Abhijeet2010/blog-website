import Link from "next/link";
import React from "react";

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className="text-white px-4 h-10 font-bold bg-gradient-to-br from-blue-500 via-purple-500">
        {text}
      </button>
    </Link>
  );
};

export default Button;
