import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {/* 2nd div */}

      <div className="flex gap-12 px-10  mt-10">
        <div className="flex-1 flex flex-col gap-7  p-4">
          <h3 className="text-center font-bold text-4xl">Who We Are</h3>
          <p className="text-md text-justify">
            With over a decade of experience in Full Stack Development and
            Digital Marketing, <strong>Abhijeet Raut</strong> is your trusted
            partner in navigating the complex digital landscape. Our journey
            began with a passion for technology and a relentless pursuit of
            excellence. <br />
            <br /> Full Stack Development: We create seamless digital solutions
            that bridge the gap between design and functionality. Digital
            Marketing: Our strategies drive organic traffic, boost conversions,
            and expand your online reach.
          </p>
        </div>
        <div className="relative flex-1 w-full h-[350px] p-4  flex justify-center">
          <Image
            fill="true"
            src={"/teaching1.png"}
            alt="about-page"
            priority={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>

      {/* 3RD */}
      <div className="flex gap-12 px-10  mt-10">
        <div className="relative flex-1 w-full h-[350px] p-4  flex justify-center">
          <Image
            fill="true"
            src={"/what-bg.png"}
            alt="about"
            sizes="(max-width: 768px) 100vw"
            priority={true}
          />
        </div>

        <div className="flex-1 flex flex-col gap-7  p-4">
          <h3 className="text-center font-bold text-4xl">What we Do</h3>
          <p className="text-md text-justify">
            Full Stack Development: We create seamless digital solutions that
            bridge the gap between design and functionality. Digital Marketing:
            Our strategies drive organic traffic, boost conversions, and expand
            your online reach. <br />
            <br /> As a certified professional in both fields,{" "}
            <strong>Abhijeet Raut </strong>
            is committed to delivering results. We believe in transparency,
            innovation, and the power of technology to transform businesses.
            Join us on this journey towards digital success.
          </p>
          <Button url={"/contact"} text={"Get in Touch"} />
        </div>
      </div>
    </>
  );
};

export default About;
