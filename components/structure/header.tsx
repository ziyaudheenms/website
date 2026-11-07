import { IconBrandMedium } from "@tabler/icons-react"

function Header() {
  return (
    <header className=" w-full justify-between py-7 items-start">
      <h1 className="font-sans text-3xl font-medium tracking-wide text-foreground">
        Ziyaudheen M S
      </h1>
      <p className=" text-lg tracking-wide text-muted-foreground my-7">
        I am a software engineer solving problems by building thoughtful, useful products. I enjoy exploring new technologies and sharing what I learn through <span className="dotted-underline inline-flex cursor-pointer items-center whitespace-nowrap text-foreground"><span className="grid size-full place-items-center rounded-[0.16em] border border-white/35 bg-neutral-800 shadow-[0_0_5px_rgba(255,255,255,0.12),inset_0_1px_1px_rgba(255,255,255,0.14),inset_0_-1px_1px_rgba(0,0,0,0.25)]"><IconBrandMedium className="size-[0.95em] text-white" /></span><span className="leading-none">writing</span></span>. I’m language-agnostic, treating tools and languages as instruments, and can adapt quickly to any stack, architecture, or ecosystem the problem demands.
      </p>

      <p className=" text-lg tracking-wide text-muted-foreground my-7">
        Exploring AI and its applications in software development, I am passionate about leveraging AI to enhance user experiences and streamline development processes.
      </p>

      
    </header>
  )
}

export default Header
