import connect from "@/db/dbConnection";
import Post from "@/models/postSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connect();
    const data = await Post.findById(id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "something Went Wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connect();
  try {
    await Post.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "sucessfully Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Post not Deleted try again later" },
      { status: 500 }
    );
  }
}
