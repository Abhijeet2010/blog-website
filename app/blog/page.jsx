import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/post");
  const data = await res.json();
  return data;
};
const Blog = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-col gap-10  px-8 py-3">
      {posts.map((post) => (
        <Link
          href={"/blog/" + post._id}
          key={post._id}
          className="shadow-2xl p-10 rounded-md border-[0.8px]"
        >
          <div className="flex gap-8  flex-wrap">
            <div className="relative flex-1/3 h-[200px] w-[350px] object-cover ">
              <Image
                className="rounded-md"
                src={post.img}
                fill={true}
                alt="banner"
                sizes="(max-width: 768px) 100vw"
                priority={true}
              />
            </div>

            <div className="flex flex-col gap-5 flex-1">
              <h1 className="text-3xl font-semibold">{post.title}</h1>
              <p className="line-clamp-3 text-justify">{post.description}</p>
              <div className="flex gap-3 items-center">
                <div className="relative h-10 w-10">
                  <Image
                    className="rounded-full"
                    src={"/testomonial1.jpg"}
                    fill={true}
                    alt="latest"
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p>{post.username}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blog;
