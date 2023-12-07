import { client } from "@/sanity/lib/client";
import { Technology } from "@/type";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "skill"]
`;


export const GET = async (req: Request) => {
  try {
    const skills : Technology[] = await client.fetch(query);

    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.log("[SKILLS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
