import Image from "next/image";
import React from "react";

const getData = async (id) => {
  const res = await fetch("http://localhost:3000/api/post/" + id, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const meta = await getData(id);
  return {
    title: meta.title,
    description: meta.description,
  };
}

const SingleBlogPost = async ({ params }) => {
  const { id } = params;

  const singlePost = await getData(id);

  return (
    <div className="px-10 mt-10">
      {/* Text div */}

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold py-3  bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-purple-500">
          {singlePost.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative h-8 w-8">
            <Image
              className="rounded-full"
              src={"/testomonial1.jpg"}
              fill={true}
              alt="testomonials"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
          <div className="flex gap-5 items-center">
            <span>{singlePost.username}</span>
            <span>Date</span>
          </div>
        </div>
      </div>

      {/* image */}

      <div className="relative h-96 w-full mt-10 ">
        <Image
          src={singlePost.img}
          fill={true}
          alt="Post tag"
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div>
        <p className="text-justify py-5">{singlePost.content}</p>
      </div>
    </div>
  );
};

export default SingleBlogPost;
