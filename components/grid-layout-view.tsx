"use client"

import React from "react"

import { LayoutGrid } from "./grid-layout"

export const LayoutGridDemo = () => {
  return (
    <div className="h-auto lg:h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const CardContent = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="border-2 border-red-500">
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: (
      <CardContent
        title="House in the woods"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/startup5.jpg",
  },
  {
    id: 2,
    content: (
      <CardContent
        title="Lunar Eclipse"
        description="Perched high above the world, this house offers breathtaking views and a unique living experience."
      />
    ),
    className: "col-span-1",
    thumbnail: "/startup3.jpg",
  },
  {
    id: 3,
    content: (
      <CardContent
        title="Greens all over"
        description="A house surrounded by greenery and nature’s beauty. It's the perfect place to relax."
      />
    ),
    className: "col-span-1",
    thumbnail: "/startup2.jpg",
  },
  {
    id: 4,
    content: (
      <CardContent
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/startup1.jpg",
  },
]
