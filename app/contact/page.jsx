import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-5 px-10">
      <h1 className="text-center font-bold text-5xl text-gray-400">
        Let's Keep in Touch{" "}
      </h1>

      <div className="flex flex-col md:flex-row  gap-12 mt-10 ">
        <div className="flex-1 justify-center w-full relative">
          <Image
            src={"/blog1.png"}
            fill={true}
            alt="Info"
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
            priority={true}
          />
        </div>
        <div className=" flex-1  p-2">
          <form className="flex flex-col gap-8 p-2 mt-5">
            <input
              className="p-3 w-full text-md border-2 border-white rounded-sm bg-black outline-none"
              placeholder="Enter Your Name"
              type="text"
            />
            <input
              className="p-3 w-full text-md border-2 border-white bg-black rounded-sm outline-none"
              placeholder="enter email"
              type="text"
            />
            <textarea
              placeholder="Enter Your Message"
              className="p-2 rounded-sm bg-black border-2 border-white outline-none"
              name=""
              rows={7}
            ></textarea>
            <Button url={"/"} text={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
