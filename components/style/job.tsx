"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { IconChevronDown, IconExternalLink } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export interface JobAttachment {
  title: string
  description: string
  image: string
  link: string
}

interface JobProps {
  company: string
  logo: string
  role: string
  years: string
  color: string
  description: string
  attachments?: JobAttachment[]
}

function Job({
  company,
  logo,
  role,
  years,
  color,
  description,
  attachments = [],
}: JobProps) {
  const [attachmentsOpen, setAttachmentsOpen] = useState(false)
  const visibleAttachments = attachments.slice(0, 4)

  return (
    <div className="mt-3">
      <div className="-mx-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-3 transition-colors sm:-mx-4 sm:gap-x-4 sm:px-4">
        <span
          className="glassy-logo col-start-1 row-start-1 flex size-12 shrink-0 items-center justify-center rounded-xl border sm:size-14"
          style={{
            borderColor: `color-mix(in srgb, ${color} 22%, white)`,
            "--logo-color": color,
          } as CSSProperties}
        >
          <Image src={logo} alt={`${company} logo`} height={44} width={44} className="relative z-[1] size-10 rounded-lg object-contain sm:size-11" />
        </span>

        <div className="col-span-3 col-start-1 row-start-2 mt-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:mt-0">
          <p
            className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]"
            style={{ color }}
          >
            {company}
          </p>
          <h2 className="break-words text-base font-medium tracking-wide text-foreground sm:truncate sm:text-lg">{role}</h2>
        </div>

        <span
          className="glassy-button col-start-3 row-start-1 shrink-0 cursor-pointer rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide text-white sm:px-4 sm:text-base"
          style={{
            backgroundColor: color,
            borderColor: `color-mix(in srgb, ${color} 50%, white)`,
            "--button-color": color,
          } as CSSProperties}
        >
          {years}
        </span>
      </div>

      <div className="sm:ml-[68px]">
        <p className="pt-1 text-sm leading-6 tracking-wide text-muted-foreground sm:text-lg sm:leading-relaxed">{description}</p>

        {visibleAttachments.length > 0 && (
          <>
            <button
              type="button"
              className="-mx-2 mt-1 flex w-[calc(100%+16px)] items-center justify-between rounded-xl px-2 py-2 text-left"
              onClick={() => setAttachmentsOpen((open) => !open)}
              aria-expanded={attachmentsOpen}
            >
              <span className="text-base font-medium tracking-wide text-foreground sm:text-lg">Works</span>
              <motion.span animate={{ rotate: attachmentsOpen ? 180 : 0 }}>
                <IconChevronDown className="size-5 text-muted-foreground" stroke={1.5} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {attachmentsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`grid gap-3 pb-2 pt-3 ${visibleAttachments.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                    {visibleAttachments.map((attachment) => (
                      <motion.a
                        key={attachment.title}
                        href={attachment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-muted"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={attachment.image} alt={attachment.title} className="h-full w-full scale-[1.02] object-cover" />
                        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/0 backdrop-blur-none transition-all duration-500 group-hover:bg-black/55 group-hover:backdrop-blur-sm" />
                        <span className="absolute inset-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="flex items-center justify-between gap-2">
                            <span className="font-medium tracking-wide">{attachment.title}</span>
                            <IconExternalLink className="size-4 shrink-0" />
                          </span>
                          <span className="mt-1 text-sm leading-4 text-white/80">{attachment.description}</span>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  )
}

export default Job