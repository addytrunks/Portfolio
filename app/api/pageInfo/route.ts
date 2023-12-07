import { client } from "@/sanity/lib/client";
import { PageInfo,} from "@/type";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

const query = groq`
    *[_type == "pageInfo"][0]
`;

export const GET = async (req: Request) => {
  try {
    const pageInfo :PageInfo  = await client.fetch(query);

    return NextResponse.json(pageInfo, { status: 200 });
  } catch (error) {
    console.log("[PAGEINFO_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
