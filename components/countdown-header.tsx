"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const CountDownTimerHeader = () => {
  const divRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: divRef,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.4, 0])
  console.log("the opacity", opacity)

  return (
    <motion.div ref={divRef} style={{ opacity }} className="flex justify-center items-center font-heading2 my-10">
      {/* <h1 className="dark:bg-gradient-to-tr dark:from-[#E0B379] dark:to-[#f0cb8a] dark:bg-clip-text dark:text-transparent text-5xl md:text-7xl text-center ">We are almost there</h1> */}
    </motion.div>
  )
}
export default CountDownTimerHeader
