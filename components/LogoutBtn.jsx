"use client";

import { signOut, useSession } from "next-auth/react";

const LogoutBtn = () => {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" && (
        <>
          <span className="animate-pulse">{session?.data?.user?.email}</span>
          <button
            className="text-white px-4 h-10 font-bold bg-gradient-to-br from-blue-500 via-purple-500"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default LogoutBtn;
