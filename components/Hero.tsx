"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/type";
import { urlFor } from "@/sanity/lib/client";

interface Props{
  pageInfo: PageInfo
}

export default function Hero({pageInfo}:Props) {
  const [text] = useTypewriter({
    words: [
      "Hi !, The Name's Adhithya Srivatsan",
      "Guy-who-loves-protein.plt",
      "<ButLovesToCodeMore />",
      'echo "Certified-Procrastinator" >>'
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-[150px] h-[150px]">
        <Image
          className="rounded-full object-cover mx-auto"
          fill
          src={urlFor(pageInfo.profilePic).url()}
          alt="img"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#ADD8E6" />
        </h1>

        <div className="pt-5 flex items-center space-x-2 justify-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
