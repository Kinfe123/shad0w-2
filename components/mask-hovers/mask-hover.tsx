"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import useMousePosition from "@/lib/hooks/use-mouse-position"

import styles from "./mask-hover.module.scss"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/lib/hooks/use-scroll"

type MousePosition = {
  x: number | null
  y: number | null
}

export default function BlendThought() {
  const [isHovered, setIsHovered] = useState(false)
  const positions : MousePosition = useMousePosition()
  const scrol= useScrollPosition()

  const {x , y} = positions


  const size = isHovered ? 400 : 60

  return (
    <main className={cn(styles.main , 'font-heading2  bg-transparent'  )}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I&apos;m a <span>selectively skilled</span> product designer with
          strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  )
}
