"use client"

import { IconArrowUpRight } from "@tabler/icons-react"

interface WritingProps {
  title: string
  link: string
}

export function Writing({ title, link }: WritingProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-3 flex items-center justify-between gap-3 rounded-xl px-3 py-1.5 transition-colors duration-300 hover:bg-muted/50 sm:gap-4 sm:py-2"
    >
      <span className="text-sm leading-6 tracking-wide text-muted-foreground sm:text-lg sm:leading-relaxed">
        {title}
      </span>
      <IconArrowUpRight
        className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-5"
        stroke={1.8}
      />
    </a>
  )
}

const writings = [
  {
    title: "Zero Knowledge System Using Libsodium For Client Side Encryption",
    link: "https://medium.com/@ziyaudheenms/zero-knowledge-system-using-libsodium-for-client-side-encryption-85b1cd5bcf67",
  },
  {
    title: "Redux Toolkit: Manage your state efficiently",
    link: "https://medium.com/@ziyaudheenms/redux-toolkit-manage-your-state-efficiently-22b236516106",
  },
  {
    title: "Implement Full Text Search For Optimizing Your PostgreSQL DB",
    link: "https://medium.com/@ziyaudheenms/implement-full-text-search-for-optimizing-your-postgresql-db-9543f59c11d9",
  },
  {
    title: "Containerize With Docker : Effective Way To Ship …",
    link: "https://medium.com/@ziyaudheenms/containerize-with-docker-effective-way-to-ship-253fe0f75c0a",
  },
]

function Writings() {
  return (
    <section className="w-full pb-9 pt-8">
      <h1 className="font-sans text-lg font-medium tracking-wide text-foreground sm:text-xl">
        What I Have Written
      </h1>
      <div className="mt-4">
        {writings.map((writing, index) => (
          <Writing key={`${writing.title}-${index}`} {...writing} />
        ))}
      </div>
      
    </section>
  )
}

export default Writings