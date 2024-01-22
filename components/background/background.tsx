"use client";

import { cn } from "@/lib/utils";
import styles from "./background.module.css";

export default function HeroWrapper() {
    return (
        <div className={styles.main}>
                 <div
        // eslint-disable-next-line tailwindcss/classnames-order
        className={cn(
           
          "backdrop-blur-3xl mask-stars-horizon relative opacity-10 my-[-12.8rem] h-[10rem] overflow-hidden",
          "inset-0  before:absolute before:opacity-40",
        //   "after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t-[rgba(120,119,198,0.4)] after:bg-background"
        )}
        style={
          {
            "--color": "#7877C6",
          } as React.CSSProperties
        }
      >
        {/* <StarHorizon /> */}
      </div>
            <div className={styles.content} />
        </div>
    );
}