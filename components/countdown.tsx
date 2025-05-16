"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "6/25/2024"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const ShiftingCountdown = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000)

    return () => clearInterval(intervalRef.current || undefined)
  }, [])

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM)

    const now = new Date()

    const distance = +end - +now

    const days = Math.floor(distance / DAY)
    const hours = Math.floor((distance % DAY) / HOUR)
    const minutes = Math.floor((distance % HOUR) / MINUTE)
    const seconds = Math.floor((distance % MINUTE) / SECOND)

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  return (
    <div className="w-full p-4 bg-gradient-to-br from-transparent to-transparent  rounded-3xl">
      <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 md:gap-0 ">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  )
}

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="font-mono w-4/12 h-20 md:h-full flex mx-10 flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block font-heading2 text-6xl lg:text-9xl font-medium bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent"
          >
            {num < 10 ? "0" + num : num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-lg lg:text-2xl tracking-wide font-light font-heading text-slate-500">
        {text}
      </span>
    </div>
  )
}

export default ShiftingCountdown
