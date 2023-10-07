import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-10">
        <Link
          href={"/portfolio/development"}
          className="h-[400px] w-[300px] relative border-2  bg-dev-img bg-cover bg-center bg-no-repeat hover:text-blue-400"
        >
          <span className="absolute bottom-2 right-5 text-2xl font-bold text-black">
            Development
          </span>
        </Link>

        <Link
          href={"/portfolio/latest-updates"}
          className="h-[400px] w-[300px] bg-update-img bg-cover bg-no-repeat bg-center relative border-2"
        >
          <span className="absolute bottom-2 right-5 text-2xl font-bold text-black">
            Latest Updates
          </span>
        </Link>

        <Link
          href={"/portfolio/technologies"}
          className="h-[400px] w-[300px] relative border-2 bg-tech-img bg-cover bg-no-repeat bg-center"
        >
          <span className="absolute bottom-2 right-5 text-2xl font-bold text-black">
            Technologies
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
