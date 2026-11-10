"use client"
import { motion } from "motion/react"
import type { ReactNode } from "react"

interface IconProps {
  link: string
  previewImage: string
  backgroundColor: string
  icon: ReactNode
  label: string
}

function Icon({ link, previewImage, backgroundColor, icon, label }: IconProps) {
  return (
        <motion.a
          className="mx-1 dotted-underline relative inline cursor-pointer align-baseline text-foreground sm:mx-2 sm:inline-flex sm:items-baseline sm:gap-1 sm:whitespace-nowrap"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          initial="rest"
          whileHover="hover"
          aria-label={`Visit ${label}`}
        >
            <motion.span
              className='pointer-events-none absolute left-1/2 bottom-full mb-3 h-32 w-48 max-w-[calc(100vw-2rem)] origin-center -translate-x-1/2 overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl'
              variants={{
                rest: {
                  opacity: 0,
                  scale: 0.82,
                  y: 8,
                  rotate: -6,
                  visibility: 'hidden',
                },
                hover: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  visibility: 'visible',
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 18,
                mass: 0.8,
              }}
            >
              {previewImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewImage}
                  alt={`${label} preview`}
                  className='h-full w-full object-cover'
                />
              ) : (
                <span className='block h-full w-full' style={{ backgroundColor }} />
              )}
            </motion.span>
            <span
              className='relative top-[0.12em] hidden size-[1em] shrink-0 self-baseline items-center justify-center rounded-[4px] shadow-xl/30 sm:flex [&>svg]:size-full'
              style={{ backgroundColor }}
            >
                {icon}
            </span>
            <span className="text-base leading-[inherit] tracking-wide sm:text-lg sm:leading-none">{label}</span>
        </motion.a>
  )
}

export default Icon