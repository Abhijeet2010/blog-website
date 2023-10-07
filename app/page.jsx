import Button from "@/components/Button";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-24 mt-10">
        <div className="flex-1 flex flex-col items-start gap-10 ">
          <h1 className="text-6xl font-bold leading-[65px]">
            Create a Blog that Best Represents Your Brand
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-purple-500">
              {" "}
              Full Stack Development
            </span>
          </h1>
          <p className="text-lg">
            Passionate Frontend Developer | Bridging Creativity and
            Functionality to Build Engaging Web Experiences | HTML, CSS,
            Javascript, React | Seeking Front end developer job| Graduation 2023
          </p>
          <Button url={"/portfolio"} text={"See Our Works"} />
        </div>

        <div className="flex-1 flex items-start relative">
          <Image
            src={"/blog1.png"}
            fill={true}
            className="object-cover"
            alt="HomeHero"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>
    </>
  );
}
