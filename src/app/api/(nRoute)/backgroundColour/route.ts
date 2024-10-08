import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, colour } = body;
    if (!colour) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await db.profile.update({
      where: {
        userId: id,
      },
      data: {
        backgroundcolour: colour,
      },
    });

    return NextResponse.json({ message: "Colour changed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
