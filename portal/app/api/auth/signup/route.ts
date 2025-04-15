import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, user }, { status: 201 });
}
