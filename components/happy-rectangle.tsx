"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { stylesWithCssVar } from "@/lib/motion"

export const HappyRect = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["80%", "-100%"])
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7])

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  )
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  )

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7])

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      })}
      ref={targetRef}
      className="mt-[50vh] flex h-[500vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#f1c944] rounded-md before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap font-heading2 min-w-screen bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent  absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
        >
          Develop Your Idea.
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
        >
          Develop Your Idea.
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute  left-1/2 top-1/2 space-y-[-100px]  bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent  font-heading2 text-center  leading-[1] text-dark text-[20rem]"
        >
          PROUD
          <br />
          <span className="">PRODUCT</span>
        </motion.p>

        <canvas
          className="bg-skin-base pointer-events-none absolute inset-0"
          id="canvas"
        ></canvas>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-transparent opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#f1c944] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  )
}
