import connect from "@/db/dbConnection";
import Post from "@/models/postSchema";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Post.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messsage: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();
  try {
    await connect();
    const data = await Post.create(body);
    console.log(data);
    return NextResponse.json(
      { message: "Post has been Created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ messsage: error.message }, { status: 500 });
  }
}
