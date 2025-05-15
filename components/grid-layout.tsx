"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { HoveryCard } from "./gridy-list"

type Card = {
  id: number
  title: string
  description: string
  content: React.ReactNode
  className: string
  thumbnail: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setSelected((prev) => (prev === id ? null : id))
  }

  return (
    <div className="relative w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className)}>
          <motion.div
            onClick={() => handleClick(card.id)}
            layout
            className={cn(
              "relative rounded-xl cursor-pointer transition-all",
              selected === card.id
                ? "fixed inset-0 z-50 flex justify-center items-center bg-black/70"
                : "bg-white/10 hover:bg-white/20"
            )}
          >
            {selected === card.id ? (
              <SelectedCard content={card.content} />
            ) : (
              <HoveryCard
                imgUrl={card.thumbnail}
                title={card.title}
                description={card.description}
              />
            )}
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={() => setSelected(null)}
        className={cn(
          "absolute inset-0 bg-black opacity-0 z-40",
          selected ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected ? 0.3 : 0 }}
      />
    </div>
  )
}

const SelectedCard = ({ content }: { content: React.ReactNode }) => (
  <div className="z-50 relative px-8 py-10 max-w-2xl w-full">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      className="absolute inset-0 bg-black z-10 rounded-xl"
    />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-20 text-white"
    >
      {content}
    </motion.div>
  </div>
)