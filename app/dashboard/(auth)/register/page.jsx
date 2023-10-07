"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      if (!username || !email || !password) {
        throw new Error("Plz Enter Every Fill");
      }
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.ok) {
        router.push("/dashboard/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-[50%] mx-auto relative top-20 ">
      <h2 className="font-bold text-5xl tracking-[24px] text-center uppercase bg-clip-text bg-gradient-to-tl from-blue-500 via-purple-500 text-transparent">
        Register Page
      </h2>
      <form className="mt-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="p-3 outline-none text-md text-black"
          type="text"
          placeholder="Enter Username"
        />
        <input
          className="p-3 outline-none text-md text-black"
          type="email"
          placeholder="Enter Email"
        />
        <input
          className="p-3 outline-none text-md text-black"
          type="password"
          placeholder="Enter Password"
        />
        <button className=" p-2  bg-gradient-to-tr from-blue-500 via-purple-500">
          Register
        </button>
        <Link
          title="navigate login page"
          href={"/dashboard/login"}
          className="mt-3"
        >
          Alredy have Account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
