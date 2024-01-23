import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  //   @ts-ignore
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
