"use client";

import { useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [apiData, setApiData] = useState();

  const session = useSession();
  const router = useRouter();

  const getData = async () => {
    const res = await fetch("/api/post");
    const data = await res.json();
    setApiData(data);
    console.log("hello");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("apidata updated");
  }, [apiData]);

  const handleDelete = async (id) => {
    const res = await fetch("/api/post/" + id, {
      method: "DELETE",
      cache: "no-store",
    });

    getData();
  };

  const submitPost = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const username = e.target[3].value;
    const content = e.target[4].value;

    try {
      if (!title || !description || !img || !username || !content) {
        alert("fill enter all detatils");
      }
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, img, username, content }),
      });

      if (res.ok) {
        e.target.reset();
        getData();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (session.status === "loading") {
    return <p>LOADING.....</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div>
        <h2 className="font-bold text-5xl mt-5 text-center tracking-[24px]">
          User Dashboard
        </h2>
        <div className="flex items-center flex-wrap gap-5">
          <div className=" flex flex-col flex-wrap  flex-1 mt-10 gap-2">
            {apiData?.map((item) => (
              <div
                className="flex flex-wrap   gap-6 border-2 p-3"
                key={item._id}
              >
                <Link href={"/blog/" + item._id}>
                  <div className="w-[250px] h-[150px] relative flex-1 ">
                    <Image
                      src={item.img}
                      fill="true"
                      alt="bg-image"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw"
                      priority={true}
                    />
                  </div>
                </Link>

                <div className="flex flex-col gap-2 flex-1  ">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 outline-none bg-red-700"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-red  mt-10">
            <h2 className="my-5 text-4xl text-gray-300 font-bold tracking-[5px] text-center">
              ADD NEW POST
            </h2>
            <form
              onSubmit={submitPost}
              className="flex flex-col items-center gap-3"
            >
              <input
                className="p-2 rounded-sm w-[80%]  text-black  outline-none "
                placeholder="Enter Title"
                type="text "
              />
              <input
                className="p-2 rounded-sm w-[80%] text-black outline-none "
                placeholder="Enter description"
                type="text"
              />
              <input
                className="p-2 rounded-sm w-[80%] text-black outline-none "
                placeholder="Enter Image link from Pexels.com"
                type="text "
              />
              <input
                className="p-2 rounded-sm w-[80%] text-black outline-none "
                placeholder="Enter Author Name"
                type="text "
              />
              <textarea
                className="p-2 rounded-sm w-[80%] text-black outline-none "
                placeholder="Enter Content"
                type="text "
              ></textarea>
              <button className="p-2 bg-red-400 w-[80%]">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
