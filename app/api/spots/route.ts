import { NextResponse } from "next/server";
import { spots } from "@/lib/spots";

export async function GET() {
  return NextResponse.json({ spots });
}
