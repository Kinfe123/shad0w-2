'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState } from 'react';
import styles from './intro.module.css'
import { cn } from '@/lib/utils';
function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);
  
  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });
  

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative font-heading2  z-10 bg-black text-white dark:bg-transparent  dark:text-white"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-screen overflow-hidden flex-col items-center justify-center  px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-[10rem]">
        <div className="leading-[1.15]">
          <div className={cn(styles.introText , 'dark:bg-gradient-to-tr dark:from-[#E0B379] dark:to-[#91f08a] dark:bg-clip-text dark:text-transparent')} style={{ opacity: opacityForBlock(progress, 0) }}>
            We value your pitch.
          </div>
          <span
            className={cn(styles.introText , "inline-block after:content-['_'] dark:bg-gradient-to-tr dark:from-[#E0B379] dark:to-purple-300/90 dark:bg-clip-text dark:text-transparent transition-[0.4s]")}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            We work really hard to make your dream company comes to reality.
          </span>
          <span
            className={cn(styles.introText , "inline-block transition-[0.4s] dark:bg-gradient-to-tr dark:from-[#E0B379] dark:to-[#e8eaed] dark:bg-clip-text dark:text-transparent")}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
           We love to expand your idea to globe as possible we could.
          </span>
        </div>
      </div>
    </div>
  );
}