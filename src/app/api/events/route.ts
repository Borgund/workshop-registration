import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(JSON.stringify(events ?? []));
}

export async function POST(request: NextRequest) {
  //const session = await getServerSession();

  const formData = await request.formData();
  const event = {
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
    startDate: new Date(formData.get("startDate")?.toString() ?? ""),
    endDate: new Date(formData.get("endDate")?.toString() ?? ""),
    spots: Number.parseInt(formData.get("spots")?.toString() ?? "0") ?? 0,
    published: formData.get("published") === "on",
    authorId: "", //session?.user....,
  };
  const res = await prisma.event.create({ data: event });
  return NextResponse.json(JSON.stringify(res));
}
