"use client"

import { motion } from "framer-motion"
import { Button } from "./button"
import { cn } from "../../lib/utils"

function FloatingPaths({ position, intense = false }: { position: number; intense?: boolean }) {
  const paths = Array.from({ length: intense ? 20 : 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="h-full w-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={intense ? 1.1 + path.id * 0.045 : path.width}
            strokeOpacity={intense ? Math.min(0.35 + path.id * 0.015, 0.95) : 0.1 + path.id * 0.03}
            initial={{ pathLength: intense ? 0.65 : 0.3, opacity: intense ? 0.85 : 0.6 }}
            animate={{
              pathLength: 1,
              opacity: intense ? [0.9, 1, 0.9] : [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: (intense ? 16 : 20) + Math.random() * (intense ? 8 : 10),
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

interface BackgroundPathsProps {
  title?: string
  hideContent?: boolean
  className?: string
}

export function BackgroundPaths({
  title = "Background Paths",
  hideContent = false,
  className,
}: BackgroundPathsProps) {
  const words = title.split(" ")

  const wrapperClass = hideContent
    ? cn("absolute inset-0 overflow-hidden pointer-events-none", className)
    : cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-neutral-950",
        className,
      )

  return (
    <div className={wrapperClass}>
      <div className="absolute inset-0">
        <FloatingPaths position={1} intense={hideContent} />
        <FloatingPaths position={-1} intense={hideContent} />
      </div>

      {!hideContent && (
        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-5xl tracking-tighter sm:text-7xl md:text-8xl">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <div className="group relative inline-block overflow-hidden rounded-16 bg-gradient-to-b from-black/10 to-white/10 p-[1px] shadow-elevation-1 transition-shadow duration-normal hover:shadow-elevation-2 dark:from-white/10 dark:to-black/10">
              <Button variant="ghost" className="rounded-16 px-32 py-24">
                Discover Excellence
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
