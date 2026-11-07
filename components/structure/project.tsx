"use client"

import { IconArrowUpRight, IconChevronDown } from "@tabler/icons-react"
import { motion } from "motion/react"
import type { CSSProperties, ReactNode } from "react"

interface ProjectProps {
  id: string
  icon: ReactNode
  title: string
  caption: string
  image: string
  description: string
  link: string
  color: string
  isOpen: boolean
  onToggle: (id: string) => void
}

const withOpacity = (color: string, opacity: number) => {
  return `color-mix(in srgb, ${color} ${opacity * 100}%, transparent)`
}

function darkenColor(color: string, amount = 0.18) {
  const normalized = color.replace("#", "")
  const expanded =
    normalized.length === 3
      ? normalized.split("").map((part) => part + part).join("")
      : normalized

  if (!/^[0-9a-f]{6}$/i.test(expanded)) {
    return color
  }

  const channels = [0, 2, 4].map((offset) => {
    const value = Number.parseInt(expanded.slice(offset, offset + 2), 16)
    return Math.round(value * (1 - amount))
  })

  return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`
}

function Project({
  id,
  icon,
  title,
  caption,
  image,
  description,
  link,
  color,
  isOpen,
  onToggle,
}: ProjectProps) {
  const pressedColor = darkenColor(color)
  const rowStyle = {
    "--project-color": color,
  } as CSSProperties

  return (
    <motion.div layout="position" className="mt-5">
      <button
        type="button"
        className="-mx-3 flex w-[calc(100%+24px)] items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-200 hover:bg-[var(--project-hover)]"
        style={{
          ...rowStyle,
          "--project-hover": withOpacity(color, 0.07),
        } as CSSProperties}
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-[7px] shadow-lg"
          style={{
            backgroundColor: color,
            boxShadow: `0 10px 24px ${withOpacity(color, 0.2)}`,
          }}
        >
          {icon}
        </span>

        <span className="min-w-0 flex-1">
          <span className="font-sans text-[19px] font-semibold tracking-wide text-foreground">
            {title}
          </span>
          <span className="mt-0.5 block text-sm leading-5 tracking-wide text-muted-foreground sm:ml-2 sm:inline sm:text-base">
            {caption}
          </span>
        </span>

        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
          <IconChevronDown className="size-5 shrink-0 text-muted-foreground" stroke={1.5} />
        </motion.span>
      </button>

      <motion.div
        className="grid overflow-hidden"
        initial={false}
        animate={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="ml-14 mt-5 w-[calc(100%-56px)] origin-top">
            <motion.div
              className="w-full overflow-hidden rounded-xl"
              initial={false}
              animate={{ height: isOpen ? 320 : 0 }}
              transition={{ height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${title} project preview`}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>

            <p className="py-4 text-lg tracking-wide text-muted-foreground">
              {description}
            </p>

            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-lg border px-5 py-1 font-sans tracking-normal text-white shadow-xl"
              style={{
                backgroundColor: color,
                borderColor: withOpacity(color, 0.5),
              }}
              whileTap={{
                scale: [1, 0.94, 1.025, 1],
                backgroundColor: pressedColor,
              }}
              transition={{
                duration: 0.42,
                times: [0, 0.28, 0.72, 1],
                ease: "easeInOut",
              }}
            >
              <span className="flex items-center gap-2 text-lg tracking-wide">
                Visit {title}
                <IconArrowUpRight className="mb-0.5 size-5" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Project
