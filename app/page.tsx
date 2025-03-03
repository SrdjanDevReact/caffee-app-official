"use client";
// import { BarChartComponent } from "@/components/bar-chart";
// import Image from "next/image";
// import { useEffect } from "react";
import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Home() {
  return (
    <div className="">
      <ScrollArea className="w-44 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden w-16 h-16 rounded-full">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by <span className="font-semibold text-foreground"></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* <div className="bg-white border-slate-400 w-16 h-16 rounded-full border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
          }
          alt="Coca-Cola Picture"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sprite_2022.svg"
          }
          alt="Sprite Picture"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Heineken_logo_%281%29.png"
          }
          alt="Heineken"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Fanta_logo_%282016%29.png"
          }
          alt="Fanta"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Schweppes_Logo_2016.png"
          }
          alt="Fanta"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/5e/Budweiser_Anheuser-Busch_logo.svg"
          }
          alt="Budweiser"
          width={50}
          height={60}
          className=""
        />
      </div>
      <div className="bg-white w-16 h-16 border-slate-400 rounded-md border flex items-center justify-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cedevita_logo.svg"
          }
          alt="Cedevita"
          width={50}
          height={60}
          className=""
        />
      </div> */}
    </div>
  );
}
