"use client"

import { IconAward, IconArrowUpRight, IconChevronDown } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { CSSProperties, useState } from "react"

const achievements = [
  {
    id: "SIH",
    title: "SIH Internals",
    year: "2025",
    summary: "won the first prize in the SIH internal ideathon of our college for the idea of parlez AI",
    detail: "MuLearn",
    color: "#20a04a",
    link: "https://www.youtube.com/watch?v=l2oSWCDAIa4",
  },
  {
    id: "yathra",
    title: "Yathra 2026",
    year: "2026",
    summary: "Got selected into the state level finals for the Hultprize Yathra ideathon",
    detail: "Hult Prize",
    color: "#9a3cea",
    link: "https://github.com/ziyaudheenms",
  },
  {

    id: "hacktober",
    title: "Hacktober Fest",
    year: "2025",
    summary: "Completed the 6PR merges to win all the contibutor batches along with the super contributor batch",
    detail: "Open Source",
    color: "#e7c565",
    link: "https://www.holopin.io/@ziyaudheenms",
  }, 
]

function Achivements() {
  const [activeId, setActiveId] = useState(achievements[0].id)

  return (
    <section className="w-full pb-9 pt-9">
      <h1 className="font-sans text-xl font-medium tracking-wide text-foreground">
        What I Have Achieved
      </h1>

      <div className="achievement-deck mt-6">
        {achievements.map((achievement, index) => {
          const isActive = achievement.id === activeId

          return (
            <motion.div
              key={achievement.id}
              onClick={() => setActiveId(achievement.id)}
              onMouseEnter={() => setActiveId(achievement.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setActiveId(achievement.id)
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              className={`achievement-card group cursor-pointer overflow-hidden rounded-2xl border text-left outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? "achievement-card-active" : ""}`}
              style={{
                "--achievement-color": achievement.color,
                "--achievement-index": index,
              } as CSSProperties}
              animate={{
                width: isActive
                  ? `calc(100% - ${(achievements.length - 1) * 56}px)`
                  : 48,
              }}
              transition={{
                width: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <span className="achievement-glow absolute inset-0" />

              <span className="relative flex h-full flex-col">
                {!isActive ? (
                  <span className="achievement-tab flex h-full items-center justify-center px-1">
                    <span className="achievement-tab-title">{achievement.title}</span>
                  </span>
                ) : (
                  <>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.42, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start justify-between gap-4 px-5 pt-4 sm:px-6 sm:pt-5"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: achievement.color }}>
                      <IconAward className="size-4" stroke={1.8} />
                      {achievement.detail}
                    </span>
                    <span className="mt-1 block truncate text-lg font-medium tracking-wide text-foreground sm:text-xl">
                      {achievement.title}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border px-2.5 py-1 text-xs text-muted-foreground" style={{ borderColor: `color-mix(in srgb, ${achievement.color} 25%, transparent)` }}>
                    {achievement.year}
                  </span>
                </motion.span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key={achievement.id}
                      initial={{ opacity: 0, scaleY: 0.985, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scaleY: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scaleY: 0.99, filter: "blur(3px)" }}
                      transition={{
                        duration: 0.52,
                        delay: isActive ? 0.24 : 0.02,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex min-h-0 flex-1 px-5 pb-5 pt-4 sm:px-6"
                    >
                      <span className="flex min-w-0 max-w-2xl flex-col justify-between py-1">
                        <span className="text-sm leading-6 tracking-wide text-muted-foreground sm:text-base">
                          {achievement.summary}
                        </span>
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium"
                          style={{ color: achievement.color }}
                        >
                          View work
                          <IconArrowUpRight className="size-4" />
                        </a>
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
                  </>
                )}
              </span>
            </motion.div>
          )
        })}
      </div>

      <div className="achievement-accordion mt-5">
        {achievements.map((achievement) => {
          const isActive = achievement.id === activeId

          return (
            <motion.article
              key={achievement.id}
              layout="position"
              className={`achievement-accordion-item rounded-xl border ${isActive ? "achievement-accordion-item-active" : ""}`}
              style={{ "--achievement-color": achievement.color } as CSSProperties}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                onClick={() => setActiveId(isActive ? "" : achievement.id)}
                aria-expanded={isActive}
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: achievement.color }}>
                    <IconAward className="size-3.5" stroke={1.8} />
                    {achievement.detail}
                  </span>
                  <span className="mt-1 block truncate text-base font-medium tracking-wide text-foreground">
                    {achievement.title}
                  </span>
                </span>
                <motion.span animate={{ rotate: isActive ? 180 : 0 }} className="shrink-0 text-muted-foreground">
                  <IconChevronDown className="size-5" stroke={1.5} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <span className="block text-sm leading-6 tracking-wide text-muted-foreground">
                        {achievement.summary}
                      </span>
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: achievement.color }}
                      >
                        View work
                        <IconArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Achivements