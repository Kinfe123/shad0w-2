import Link from "next/link"

import ShiftingCountdown from "@/components/countdown"
import CountDownTimerHeader from "@/components/countdown-header"
import GetStarted from "@/components/get-start"
import { HappyRect } from "@/components/happy-rectangle"
import HeroSection from "@/components/hero-sec"
import { HorizontalScrollCarousel } from "@/components/horizontal-crsl"
import Intro from "@/components/intros"
import BlendThought from "@/components/mask-hovers/mask-hover"
import { MileStoneDemo } from "@/components/milestone/milestone-view"
import { ScrollProvider } from "@/components/providers/scroll-view"
import Social from "@/components/socials"
import StartUpDemo from "@/components/startup-demo/startup-demo"
import { WavyBackgroundDemo } from "@/components/wave-bg-view"

export default function IndexPage() {
  return (
    <div>
      <ScrollProvider>
        <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="overflow-x-clip">
            <div className="">
              <HeroSection />
            </div>
          </div>
          <div>
            <GetStarted />
          </div>

          <div className="overflow-hidden">
            <MileStoneDemo />
          </div>
          <div className="">
            <Intro />
          </div>
          <div className="overflow-x-clip">
            <HappyRect />
          </div>

          <div className=" mx-auto">
            <div className="">
              <CountDownTimerHeader />
            </div>
            <ShiftingCountdown />
          </div>

          <div className=" grid grid-cols-2 gap-1">
            <div className="mt-[-500x] flex  justify-center items-center bg-transparent px-10">
              <p className="d:text-4xl mt-[-700px] font-heading2 lg:text-6xl xl:text-[12rem] font-medium bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent">
                We have <br /> made everything for you
              </p>
            </div>
            <div className="overflow-clip">
              <HorizontalScrollCarousel />
            </div>
          </div>

          <div>
            <StartUpDemo />
          </div>
          <div></div>
          {/* <div className='mx-auto flex justify-center items-center'>
        <Social />
      </div> */}
        </section>
      </ScrollProvider>
      {/* to be fixed */}
      {/* <BlendThought /> */}
    </div>
  )
}
