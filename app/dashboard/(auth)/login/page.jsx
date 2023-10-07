"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  if (session?.status === "loading") {
    return <p>LOADINg.......</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      if (!email || !password) {
        throw new Error("Plz Fill All Data Correctly");
      }
      signIn("credentials", { email, password });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="w-[50%] mx-auto relative top-32 ">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
        <button className=" p-2  bg-gradient-to-br from-blue-500 via-purple-500">
          Login
        </button>
      </form>
      <button
        className="p-3 border-[1.5px] mt-3 bg-gradient-to-tr from-red-500 via-purple-600"
        onClick={() => signIn("google")}
      >
        Login With Google
      </button>
      <br />
      <br />
      <Link title="navigate register Page" href={"/dashboard/register"}>
        New User? Register Here....
      </Link>
    </div>
  );
};

export default Login;
