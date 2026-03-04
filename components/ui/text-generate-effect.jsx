"use client"

import { motion, stagger, useAnimate, useInView } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
  ...props
}) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, margin: "0px" })
  const wordsArray = React.useMemo(() => words.split(" "), [words])

  React.useEffect(() => {
    if (scope.current && isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
        },
      )
    }
  }, [animate, duration, filter, scope, staggerDelay, isInView])

  return (
    <div
      className={cn("inline-block", className)}
      {...props}
    >
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => (
          <motion.span
            className="opacity-0 will-change-transform will-change-opacity will-change-filter inline-block mr-[0.2em]"
            key={`${word}-${idx}`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default TextGenerateEffect
