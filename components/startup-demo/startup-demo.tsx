"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

import styles from "./startup.module.css"

const StartUpDemo = () => {
  const firstText = useRef<HTMLParagraphElement>(null)
  const secondText = useRef<HTMLParagraphElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: () => window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent })
    gsap.set(secondText.current, { xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p
            ref={firstText}
            className="font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent"
          >
            Build . Ship . Scale -
          </p>
          <p
            ref={secondText}
            className="font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent"
          >
            Build . Ship . Scale -
          </p>
        </div>
      </div>
    </main>
  )
}

export default StartUpDemo
