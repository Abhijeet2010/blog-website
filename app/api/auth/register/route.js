import connect from "@/db/dbConnection";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  await connect();
  const { username, email, password } = await request.json();
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const data = await User.create({ username, email, password: hashPassword });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
