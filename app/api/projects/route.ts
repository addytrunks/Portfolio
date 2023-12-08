import { client } from "@/lib/sanity";
import { Project } from "@/type";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;


export const GET = async (req: Request) => {
  try {
    const projects : Project[] = await client.fetch(query);

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.log("[PROJECTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
