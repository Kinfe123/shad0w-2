"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { DirectionAwareHover } from "./hover-card"
type HoveryProps = {
    imgUrl: string,
    title: string,
    description: string
}

export  function HoveryCard({imgUrl , title , description}: HoveryProps) {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className="h-full w-full object-cover  relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imgUrl }>
        <p className="font-bold text-xl font-heading2">{description}</p>
        <p className="font-normal text-sm font-heading">{title}</p>
      </DirectionAwareHover>
    </div>
  )
}
