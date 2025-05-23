"use client"

import { AnimatePresence, motion } from "framer-motion"

import { useScrollPosition } from "@/lib/hooks/use-scroll"

import LandingNav from "./landing-nav"

const NavbarSticky = () => {
  const scrollable = useScrollPosition()
  return (
    <div className="w-full">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.8 }}
        className=" flex w-screen z-30  fixed top-0 left-0 justify-between  p-1  bg-transparent  dark:border-gray-600  animate-header-slide-down-fade"
      >
        <div className="mx-auto flex justify-center items-center">
          <LandingNav />
        </div>
      </motion.nav>
    </div>
  )
}
export default NavbarSticky
