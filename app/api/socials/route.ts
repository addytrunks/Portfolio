import { client } from "@/sanity/lib/client";
import { Social } from "@/type";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "social"]
`;


export const GET = async (req: Request) => {
  try {
    const socials : Social[] = await client.fetch(query);

    return NextResponse.json(socials, { status: 200 });
  } catch (error) {
    console.log("[SOCIALS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
