import CTA from "@/components/CTA"
import ShiftingCountdown from "@/components/countdown"
import CountDownTimerHeader from "@/components/countdown-header"
import GetStarted from "@/components/get-start"
import { LayoutGridDemo } from "@/components/grid-layout-view"
import { HappyRect } from "@/components/happy-rectangle"
import HeroSection from "@/components/hero-sec"
import { HorizontalScrollCarousel } from "@/components/horizontal-crsl"
import Intro from "@/components/intros"
import { MileStoneDemo } from "@/components/milestone/milestone-view"
import { ScrollProvider } from "@/components/providers/scroll-view"
import StartUpDemo from "@/components/startup-demo/startup-demo"

export default function IndexPage() {
  return (
    <div className="w-full flex justify-center items-center">
      <ScrollProvider>
        <section className="w-full flex flex-col justify-center items-center gap-6 pb-8 md:pb-10 ">
          <div className="overflow-x-clip w-full">
            <div className="">
              <HeroSection />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <GetStarted />
          </div>

          <div className="overflow-hidden">
            <MileStoneDemo />
          </div>

          <div className="">
            <Intro />
          </div>

          <div className="hidden lg:block overflow-x-hidden md:overflow-x-clip w-full ">
            <HappyRect />
          </div>

          <div className="w-full mx-auto flex justify-center items-center">
            <div className="">
              <CountDownTimerHeader />
            </div>
            <ShiftingCountdown />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-1">
            <div className="mt-[-500x] flex  items-center justify-center bg-transparent px-10">
              <p className="d:text-4xl mt-[-700px] bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text font-heading2 font-medium text-transparent lg:text-[10rem] sticky top-44  ">
                We have <br /> made everything for you
              </p>
            </div>
            <div className="overflow-clip">
              <HorizontalScrollCarousel />
            </div>
          </div>
          <div>
            <LayoutGridDemo />
          </div>

          <div className="w-full">
            <StartUpDemo />
          </div>
          <div>
            <CTA />
          </div>
        </section>
      </ScrollProvider>
    </div>
  )
}
